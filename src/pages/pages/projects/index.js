import React, { useState, useEffect } from 'react'
import FormLayoutsProject from "../../../views/form-layouts/FormLayoutsProject"
import FormLayoutsJoin from "../../../views/form-layouts/FormLayoutsJoin"
import ProjectTables from "../../../views/tables/projectTable"
import { useRouter } from 'next/router'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { permCheck }from '../../../permcheck'

// import UncontrolledBoard from 'src/Board/kanban.js'

const columns = [
  {id: 'projectName', label: 'Project Name', minWidth: 170,  align: 'center'},
  {id: 'projectStatus', label: 'Project Status', minWidth: 170, align: 'center'},
  {id: 'initialCharge', label: 'Initial Charge', minWidth: 170,  align: 'center'},
  {id: 'balance', label: 'Project Balance', minWidth: 170,  align: 'center'},
]


export default function ProjectTable(){
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [projects, setProjects]= useState(null)

  const totalProjects = () => {
    return (projects.length)
  }

  const router = useRouter()

  useEffect(() => {
  permCheck()
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
  {typeof window !== 'undefined' && JSON.parse(localStorage.getItem("type")) === "developer" && <FormLayoutsProject />}
  {typeof window !== 'undefined' && JSON.parse(localStorage.getItem("type")) === "client" && <FormLayoutsJoin />}
  {/* <UncontrolledBoard /> */}
        
  </div>
  )
}