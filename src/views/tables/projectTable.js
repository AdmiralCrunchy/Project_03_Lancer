// ** React Imports
import { useState, useEffect } from 'react'

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
  {id: 'id', label: 'Project Id', minWidth: 25},
  {id: 'project_name', label: 'Project Name', minWidth: 150},
  {id: 'project_status', label: 'Project Status', minWidth: 150, align: 'center'},
  {id: 'initial_charge', label: 'Initial Charge', minWidth: 150, align: 'right'},
  {id: 'balance', label: 'Project Balance', minWidth: 150, align: 'right'},
]



export default function ProjectTable(){


  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [projects, setProjects]= useState(null)

  const totalProjects = () => {
    return (projects.length)
  }

  useEffect(() => {
    fetch("http://lancerbackend.herokuapp.com/developers/home", {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      contentType: 'application/json',
      headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6IlBhcmtlciIsImxhc3RfbmFtZSI6Ik1jS2lsbG9wIiwiZW1haWwiOiJtY2tpbHBhcjAwMEBob3RtYWlsLmNvbSIsImlhdCI6MTY2MjA2NTQ5OSwiZXhwIjoxNjYyMDcyNjk5fQ.haE3qCoBPSwr4sSJWgCB-DexCo8b9zaYJIkBBDi0r3M',
    "Access-Control-Allow-Origin": "*"}
    })
     .then(res => res.json())
     .then((data) =>{
      console.log(data)
      const holdingArray = []
      data.Projects.map(project => {
        let details = {
          id: project.id,
          projectName: project.project_name,
          projectStatus: project.project_status,
          initialCharge: project.initial_charge,
          balance: project.balance
        }
        holdingArray.push(details)

      })
        setProjects(holdingArray)
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
    <div>
    {projects && <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      
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
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    console.log(column.id)
                    if(row[column.id] > 0 && column.id != 'id'){
                      const value = '$'+row[column.id]
                      
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


