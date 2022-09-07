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

const columns = [
  {id: 'Deliverable', label: 'Deliverable', minWidth: 170,  align: 'center'},
  {id: 'Priority', label: 'Priority', minWidth: 170,  align: 'center'},
]

const DeadlineTable = () => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [deadlines, setDeadlines] = useState(null)


  useEffect(() => {
    if (typeof window !== 'undefined') {
      
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
      const holdingArray = []
      
      data.Projects.map(project => {
        let details = {
          Deliverable: project.Deadlines.deliverable,
          Priority: project.Deadlines.priority,
        }
        
        holdingArray.push(details)
      
      })
        setDeadlines(holdingArray)
     }
     )
    }
  }, [])


  const totalClients = () => {
    return (rows.length)
  }
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <div>
    {deadlines && <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom:4 }}>
      
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
            {deadlines.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(deadline => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={deadlines.id}>
                  {columns.map(column => {
                    if(deadline[column.id] > 0 ){
                      const value = '$'+deadline[column.id]

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      )
                    }else{
                      const value = deadline[column.id]

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
        count={deadlines.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      
  </Paper>}
    </div>
  )
}

export default DeadlineTable
