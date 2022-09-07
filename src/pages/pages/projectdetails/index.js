import React, { useState, useEffect } from 'react'
import { permCheck } from 'src/permcheck'
import ProjectTables from "../../../views/tables/projectTable"
import DeadlineTable from "../../../views/tables/DeadlineTable"
import InvoiceTable from "../../../views/tables/InvoiceTable"

// ** MUI Components
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'

const columns = [
  {id: 'projectName', label: 'Project Name', minWidth: 170,  align: 'center'},
  {id: 'projectStatus', label: 'Project Status', minWidth: 170, align: 'center'},
  {id: 'initialCharge', label: 'Initial Charge', minWidth: 170,  align: 'center'},
  {id: 'balance', label: 'Project Balance', minWidth: 170,  align: 'center'},
]


export default function singleProject(){
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [projects, setProjects]= useState(null)

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
    <div >
   

    {typeof window !== 'undefined' && <ProjectTables/>}
    {typeof window !== 'undefined' && <DeadlineTable/>}
    {typeof window !== 'undefined' && <InvoiceTable/>}

  {/* <UncontrolledBoard /> */}
        
  </div>
  )
}