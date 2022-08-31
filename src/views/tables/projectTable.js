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
  {id: 'projectName', label: 'Project Name', minWidth: 170},
  {id: 'projectStatus', label: 'Project Status', minWidth: 170, align: 'center'},
  {id: 'initialCharge', label: 'Initial Charge', minWidth: 170, align: 'right'},
  {id: 'balance', label: 'Project Balance', minWidth: 170, align: 'right'},
]

const createData = (projectName, projectStatus, initialCharge, balance) => {
  return { projectName, projectStatus, initialCharge, balance}
}

const rows = [
  createData(`Monkeys Vs Shakespeare`, 'Not Started', 250, 50000),
  createData(`Shelf Space`, 'Bug Fixing', 1000, 50000),
  createData(`Let's Play`, 'Cancelled', 750, 2400),
  createData(`Chew On It`, 'Cancelled', 12000, 150000),
  createData(`Outbound Gear`, 'Cancelled', 1400, 10000),
  createData(`Monkeys Vs Mike Tyson`, 'Not Started', 250, 50000),
  createData(`Banana Inc`, 'Bug Fixing', 1000, 50000),
  createData(`Tombero`, 'Cancelled', 750, 2400),
  createData(`Connect Seven `, 'Market Ready', 12000, 150000),
  createData(`Outbound Heroes`, 'Cancelled', 1400, 10000),
  createData(`Dave Vs Shakespeare`, 'Not Started', 250, 50000),
  createData(`Shelf Space`, 'Bug Fixing', 1000, 50000),
  createData(`H-VAC Servers`, 'Cancelled', 750, 2400),
  createData(`Chew On Shoes`, 'Market Ready', 12000, 150000),
  createData(`Outbound Gear`, 'Cancelled', 1400, 10000),
]

const TableBasic = () => {
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
                    if(row[column.id] > 0 ){
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

export default TableBasic
