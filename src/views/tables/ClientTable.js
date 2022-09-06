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
  {id: 'firstName', label: 'First Name', minWidth: 170,  align: 'center'},
  {id: 'lastName', label: 'Last Name', minWidth: 170,  align: 'center'},
  {id: 'email', label: 'E-mail', minWidth: 170, align: 'center'},
  {id: 'phone', label: 'Phone', minWidth: 170, align: 'center'},
  {id: 'address', label: 'Address', minWidth: 170, align: 'center'},
  
]

const ClientTable = () => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [rows, setRows] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
    fetch("http://lancerbackend.herokuapp.com/developers/verify", {
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
      if(!data.dev){
        if (typeof window !== 'undefined') {
          localStorage.clear();
          window.location.href= "/"
        }
      }
  
      })
    }
     }, [])

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
          firstName: project.Client.first_name,
          lastName: project.Client.last_name,
          phone: project.Client.phone,
          email: project.Client.email,
          address: project.Client.address,
        }
        
        holdingArray.push(details)
      
      })
        setRows(holdingArray)
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

    {rows && <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 550 }}>
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>}
    </div>
  )
}

export default ClientTable
