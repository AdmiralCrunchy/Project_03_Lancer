// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const createData = (name, status, charge, balance) => {
  return { name, status, charge, balance}
}

const rows = [
  createData(`Monkeys Vs Shakespeare`, 'Not Started', 250, 50000),
  createData(`Shelf Space`, 'Bug Fixing', 1000, 50000),
  createData(`Let's Play`, 'Cancelled', 750, 2400),
  createData(`Chew On It`, 'Market Ready', 12000, 150000),
  createData(`Outbound Gear`, 'Cancelled', 1400, 10000),
  createData(`Monkeys Vs Shakespeare`, 'Not Started', 250, 50000),
  createData(`Shelf Space`, 'Bug Fixing', 1000, 50000),
  createData(`Let's Play`, 'Cancelled', 750, 2400),
  createData(`Chew On It`, 'Market Ready', 12000, 150000),
  createData(`Outbound Gear`, 'Cancelled', 1400, 10000),
  createData(`Monkeys Vs Shakespeare`, 'Not Started', 250, 50000),
  createData(`Shelf Space`, 'Bug Fixing', 1000, 50000),
  createData(`Let's Play`, 'Cancelled', 750, 2400),
  createData(`Chew On It`, 'Market Ready', 12000, 150000),
  createData(`Outbound Gear`, 'Cancelled', 1400, 10000),
]

const TableBasic = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align='right'>Current Status</TableCell>
            <TableCell align='right'>Initial Charge</TableCell>
            <TableCell align='right'>Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.status}</TableCell>
              <TableCell align='right'>${row.charge}</TableCell>
              <TableCell align='right'>${row.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableBasic
