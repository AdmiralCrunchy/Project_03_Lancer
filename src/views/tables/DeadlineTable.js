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
  {id: 'projectId', label: 'Project Id', minWidth: 50,  align: 'center'},
  {id: 'deadlineDate', label: 'Deadline Date', minWidth: 100, align: 'center'},
  {id: 'deliverable', label: 'Deliverable', minWidth: 200,  align: 'left'},
]


export default function DeadlineTables(){


  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [deadlines, setDeadlines]= useState(null)

  const totalDeadlines = () => {
    return (deadlines.length)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
    fetch("http://lancerbackend.herokuapp.com/projects/deadlines/developers", {
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
                
                data.Deadlines.map(Deadline => {
                    let details = {
                        projectId: Deadline.project_id,
                        deadlineDate: Deadline.completion_date,
                        deliverable: Deadline.deliverable,
                    }
                    holdingArray.push(details)
                })
                
            })
            setDeadlines(holdingArray)
        }
        )
    }
}, [])


useEffect(() => {
    if (typeof window !== 'undefined') {
    fetch("http://lancerbackend.herokuapp.com/projects/deadlines/clients", {
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
                
                data.Deadlines.map(Deadline => {
                    let details = {
                        projectId: Deadline.project_id,
                        deadlineDate: Deadline.completion_date,
                        deliverable: Deadline.deliverable,
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
    {deadlines && <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom:4 }}>
      <h1>Deadlines</h1>
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
            {deadlines.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(deadlines => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={deadlines.project_id}>
                  {columns.map(column => {
                    if(deadlines[column.id] > 0 ){
                      const value = deadlines[column.id]

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      )
                    }else{
                      const value = deadlines[column.id]

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