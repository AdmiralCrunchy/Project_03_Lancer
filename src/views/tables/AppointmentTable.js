import { useState, useEffect } from 'react'
import { permCheck } from 'src/permcheck'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { CheckboxMultipleMarkedOutline } from 'mdi-material-ui'

const columns = [
  {id: 'appointmentName', label: 'Appointment Name', minWidth: 170,  align: 'center'},
  {id: 'appointmentDate', label: 'Appointment Date', minWidth: 170, align: 'right'},
  {id: 'appointmentTime', label: 'Appointment Time', minWidth: 170,  align: 'right'},
  {id: 'appointmentDuration', label: 'Duration', minWidth: 170,  align: 'right'},
  {id: 'appointmentDescription', label: 'Description', minWidth: 170,  align: 'right'},
  {id: 'appointmentLocation', label: 'Location', minWidth: 170,  align: 'right'},
]



export default function ProjectTables(){


  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [projects, setProjects]= useState(null)

  const totalProjects = () => {
    return (projects.length)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
    fetch("http://lancerbackend.herokuapp.com/projects/appointments/developers", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        contentType: 'application/json',
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
            "Access-Control-Allow-Origin": "*"
        }
    })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            const holdingArray = []
            data.map(data => {
                
                data.Apppointments.map(Appointment => {
                    let details = {
                        projectId: Appointment.project_id,
                        appointmentName: Appointment.appointment_name,
                        appointmentDate: Appointment.appointment_date,
                        appointmentTime: Appointment.appointment_time,
                        appointmentDuration: Appointment.appointment_duration,
                        appointmentDescription: Appointment.description,
                        appointmentLocation: Appointment.appointment_location,
                    }
                    holdingArray.push(details)
                })
                
            })
            setDeadlines(holdingArray)
        }
        )
    }
}, [])
  
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  


  return (
    <div>
    {projects && <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom:4 }}>
      <h1>Appointments</h1>
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

  </div>
  )
}