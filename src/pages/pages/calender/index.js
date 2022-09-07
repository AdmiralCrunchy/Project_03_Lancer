// ** React Imports
import React, { useState, useEffect } from "react";

// import Calendar from "react-beautiful-calendar"

import { useRouter } from 'next/router'
import AppointmentTables from '../../../views/tables/AppointmentTable'
import DeadlineTables from '../../../views/tables/DeadlineTable'
import FormLayoutsAppointment from "../../../views/form-layouts/FormLayoutsAppointment"
import FormLayoutsDeadline from "../../../views/form-layouts/FormLayoutsDeadline";

// ** MUI Components
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'


const Card = styled(MuiCard)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: { width: '100rem' }
  }))

   
const CalendarPage = () => {

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
    )}

export default CalendarPage;