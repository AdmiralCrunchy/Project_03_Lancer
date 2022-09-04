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
    { id: 'id', label: 'Invoice Id', minWidth: 25 },
    { id: 'amountDue', label: 'Amount Due', minWidth: 25, align: 'center' },
    { id: 'paymentDate', label: 'Due Date', minWidth: 25, align: 'center' },
    { id: 'projectName', label: 'Project Name', minWidth: 150, align: 'center' },
    { id: 'balance', label: 'Project Balance', minWidth: 150, align: 'center' }
]



export default function InvoiceTable() {


    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [projects, setProjects] = useState(null)

    const totalProjects = () => {
        return (projects.length)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
        fetch("http://lancerbackend.herokuapp.com/projects/invoices", {
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
                    
                    data.Payments.map(Payment => {
                        let details = {
                            id: Payment.id,
                            amountDue: Payment.payment_sum,
                            paymentDate: Payment.payment_date,
                            projectName:data.project_name,
                            balance: data.balance
                        }
                        holdingArray.push(details)
                    })
                    
                })
                setProjects(holdingArray)
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
                                    <TableRow hover role='checkbox' tabIndex={-1} key={projects.id}>
                                        {columns.map(column => {
                                           
                                            if (projects[column.id] > 0 && column.id != 'id') {
                                                const value = '$' + projects[column.id]

                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </TableCell>
                                                )
                                            } else {
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


