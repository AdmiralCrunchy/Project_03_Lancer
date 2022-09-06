// ** React Imports
import React, { useState, useEffect } from "react";
import Calendar from "react-beautiful-calendar"

import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'


const Card = styled(MuiCard)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: { width: '100rem' }
  }))

  const createData = (day, month, year, name, status, appName, description) => {
    return { day, month, year, name, status, appName, description}
  }

  const columns = [
    {id: 'projectName', label: 'Project Name', minWidth: 170,  align: 'center'},
    {id: 'deadlineDate', label: 'Project Deadline', minWidth: 170, align: 'center'},
    {id: 'address', label: 'Address', minWidth: 170, align: 'center'},
    
  ]
   
function CalendarPage() {
   
  let today = new Date();

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [projects, setProjects]= useState(null)

    const [day,setDate] = useState(today.getDate())
    const [month,setMonth] = useState("September")
    const [year,setYear] = useState(today.getFullYear())
   
    const dateChangeHandler = ([day, month, year]) => {
      // ...use the values here
      console.log(day)
      setDate(day)
      if(month === 1){
        setMonth("January")
      }
      if(month === 2){
        setMonth("February")
      }
      if(month === 3){
        setMonth("March")
      }
      if(month === 4){
        setMonth("April")
      }
      if(month === 5){
        setMonth("May")
      }
      if(month === 6){
        setMonth("June")
      }
      if(month === 7){
        setMonth("July")
      }
      if(month === 8){
        setMonth("August")
      }
      if(month === 9){
        setMonth("September")
      }
      if(month === 10){
        setMonth("October")
      }
      if(month === 11){
        setMonth("November")
      }
      if(month === 12){
        setMonth("December")
      }
      setYear(year)
    };

    const totalAppointments = () => {
      return (projects.length)
    }

    const router = useRouter()

    useEffect(() => {
      fetch("http://lancerbackend.herokuapp.com/developers/home", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        contentType: 'application/json',
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
           "Access-Control-Allow-Origin": "*"
    }
      })
       .then(res => res.json())
       .then((data) =>{
        console.log(data)
        const holdingArray = []
        if(!data.Projects){return}
        data.Projects.map(project => {
          let details = {

            projectComplete: project.completion_date,
          }
          holdingArray.push(details)
  
        })
          setRows(holdingArray)
       }
       )
    }, [])

    const handleChangePage = (event, newPage) => {
      setPage(newPage)
    }
  
    const handleChangeRowsPerPage = event => {
      setRowsPerPage(+event.target.value)
      setPage(0)
    }

    return (
      <Box>
        <Calendar onDateChange={dateChangeHandler} />
        <h2>Project Deadlines</h2>
        {projects && <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom:4 }}>
          <TableContainer component={Paper}>
          <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(projects => {
                  return (
                    <TableRow hover role='checkbox' tabIndex={-1} key={projects.id}>
                      {columns.map(column => {
                        if(projects[column.id] > 0 ){
                          const value = '$'+projects[column.id]

                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          )
                        }else{
                          const value = projects[column.id]

                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          )
                        }
                      })}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={projects.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>}
          <h1> Important Appointments</h1>
                <tbody>
                <tr>
                  <h2>{month} {day} {year}: </h2>
                </tr>
              </tbody>
    </Box>
    )
  }

export default CalendarPage;