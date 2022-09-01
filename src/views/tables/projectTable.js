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
  {id: 'id', label: 'Project Id', minWidth: 25},
  {id: 'project_name', label: 'Project Name', minWidth: 150},
  {id: 'project_status', label: 'Project Status', minWidth: 150, align: 'center'},
  {id: 'initial_charge', label: 'Initial Charge', minWidth: 150, align: 'right'},
  {id: 'balance', label: 'Project Balance', minWidth: 150, align: 'right'},
]

const createData = (id, project_name, project_status, initial_charge, balance) => {
  return {id, project_name, project_status, initial_charge, balance}
}

const rows = [
  createData(1,`Monkeys Vs Shakespeare`, 'Not Started', 250, 50000),
  createData(2,`Shelf Space`, 'Bug Fixing', 1000, 50000),
  createData(3,`Let's Play`, 'Cancelled', 750, 2400),
  createData(4,`Chew On It`, 'Cancelled', 12000, 150000),
  createData(5,`Outbound Gear`, 'Cancelled', 1400, 10000),
  createData(6,`Monkeys Vs Mike Tyson`, 'Not Started', 250, 50000),
  createData(7,`Banana Inc`, 'Bug Fixing', 1000, 50000),
  createData(8,`Tombero`, 'Cancelled', 750, 2400),
  createData(9,`Connect Seven `, 'Market Ready', 12000, 150000),
  createData(10,`Outbound Heroes`, 'Cancelled', 1400, 10000),
  createData(11,`Dave Vs Shakespeare`, 'Not Started', 250, 50000),
  createData(12,`Shelf Space`, 'Bug Fixing', 1000, 50000),
  createData(13,`H-VAC Servers`, 'Cancelled', 750, 2400),
  createData(14,`Chew On Shoes`, 'Market Ready', 12000, 150000),
  createData(15,`Outbound Gear`, 'Cancelled', 1400, 10000),
]

const projectTable = () => {
  const [page, setPage] =useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const totalProjects = () => {
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
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
                      const value = row[column.id]
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
  </Paper>
  )
}

export default projectTable
