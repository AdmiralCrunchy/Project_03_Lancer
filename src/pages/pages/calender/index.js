// ** React Imports
import React, { useState, useEffect } from "react";
import Calendar from "react-beautiful-calendar"

import { useRouter } from 'next/router'
import AppointmentTables from '../../../views/tables/AppointmentTable'
import DeadlineTables from '../../../views/tables/DeadlineTable'
import FormLayoutsAppointment from "../../../views/form-layouts/FormLayoutsAppointment"
import FormLayoutsDeadline from "../../../views/form-layouts/FormLayoutsDeadline";

// ** MUI Components
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { permCheck }from '../../../permcheck'





const Card = styled(MuiCard)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: { width: '100rem' }
  }))
   
function CalendarPage() {
   
  let today = new Date();

    // const [day,setDate] = useState(today.getDate())
    // const [month,setMonth] = useState("September")
    // const [year,setYear] = useState(today.getFullYear())
   
    // const dateChangeHandler = ([day, month, year]) => {
    //
    //   setDate(day)
      
    //   if(month === 1){
    //     setMonth("January")
    //   }
    //   if(month === 2){
    //     setMonth("February")
    //   }
    //   if(month === 3){
    //     setMonth("March")
    //   }
    //   if(month === 4){
    //     setMonth("April")
    //   }
    //   if(month === 5){
    //     setMonth("May")
    //   }
    //   if(month === 6){
    //     setMonth("June")
    //   }
    //   if(month === 7){
    //     setMonth("July")
    //   }
    //   if(month === 8){
    //     setMonth("August")
    //   }
    //   if(month === 9){
    //     setMonth("September")
    //   }
    //   if(month === 10){
    //     setMonth("October")
    //   }
    //   if(month === 11){
    //     setMonth("November")
    //   }
    //   if(month === 12){
    //     setMonth("December")
    //   }
    //   setYear(year)
    // };

    return (
      <Box>
        {/* <Calendar onDateChange={dateChangeHandler}/> */}
        {typeof window !== 'undefined' && <DeadlineTables/>}
        {typeof window !== 'undefined' && <AppointmentTables/>}
        {/* Developers get to set Deadlines and Clients Get to set Appointments both parties will be able to see this information. */}
        {typeof window !== 'undefined' && JSON.parse(localStorage.getItem("type")) === "developer" && <FormLayoutsDeadline />}
        {typeof window !== 'undefined' && JSON.parse(localStorage.getItem("type")) === "client"}
        {typeof window !== 'undefined' && JSON.parse(localStorage.getItem("type")) === "developer"}
        {typeof window !== 'undefined' && JSON.parse(localStorage.getItem("type")) === "client" && <FormLayoutsAppointment />}
    </Box>
    )
  }

export default CalendarPage;