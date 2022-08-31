// ** React Imports
import { useState } from 'react'

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
  {id: 'firstName', label: 'First Name', minWidth: 170},
  {id: 'lastName', label: 'Last Name', minWidth: 170},
  {id: 'address', label: 'Address', minWidth: 170, align: 'right'},
  {id: 'email', label: 'E-mail', minWidth: 170, align: 'right'},
  {id: 'completedProjects', label: 'Completed Projects', minWidth: 170, align: 'right'},

]
function createData(firstName, lastName, address, email, completedProjects) {

  return { firstName, lastName, address, email, completedProjects }
}

const rows = [
  createData('Joe', 'Smith', '123 Test Street', 'joesmith@test.com', '3'),
  createData('Joe', 'Smith', '123 Test Street', 'joesmith@test.com', '4'),
  createData('Joe', 'Smith', '123 Test Street', 'joesmith@test.com', '6'),
  createData('Joe', 'Smith', '123 Test Street', 'joesmith@test.com', '1'),
  createData('Joe', 'Smith', '123 Test Street', 'joesmith@test.com', '5'),
  createData('Joe', 'Smith', '123 Test Street', 'joesmith@test.com', '3'),
  createData('Joe', 'Smith', '123 Test Street', 'joesmith@test.com', '8'),
  createData('Joe', 'Smith', '123 Test Street', 'joesmith@test.com', '12'),
  createData('Joe', 'Smith', '123 Test Street', 'joesmith@test.com', '5'),
  createData('Joe', 'Smith', '123 Test Street', 'joesmith@test.com', '2'),
]

const ClientTable = () => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const totalClients = () => {
    return (row.length)
  }
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
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
    </Paper>
  )
}

export default ClientTable
