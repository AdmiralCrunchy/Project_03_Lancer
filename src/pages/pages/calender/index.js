// ** React Imports
import React, { useState, useEffect } from "react";
import Calendar from "react-beautiful-calendar"

import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'

const Card = styled(MuiCard)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: { width: '100rem' }
  }))


   
   
  function CalendarPage() {
   
    useEffect(() => {
      fetch("http://lancerbackend.herokuapp.com/developers/verify", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        contentType: 'application/json',
        headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "Access-Control-Allow-Origin": "*"
      }
      })
       .then(res => res.json())
       .then((data) =>{
        console.log(data)
        console.log(data.dev)
        if(!data.dev){
          if (typeof window !== 'undefined') {
            localStorage.clear();
            window.location.href= "/"
          }
        }
    
        })
    
       }, [])

    const [date,setDate] = useState("")
    const [month,setMonth] = useState("")
    const [year,setYear] = useState("")
   
    const dateChangeHandler = ([date, month, year]) => {
      // ...use the values here
      
      console.log(date)
      setDate(date)
      if(month === 1){
        setMonth("January")
      }
      if(month === 2){
        setMonth("February")
      }
      if(month === 3){
        setMonth("March")
      }
      if(month === 4){
        setMonth("April")
      }
      if(month === 5){
        setMonth("May")
      }
      if(month === 6){
        setMonth("June")
      }
      if(month === 7){
        setMonth("July")
      }
      if(month === 8){
        setMonth("August")
      }
      if(month === 9){
        setMonth("September")
      }
      if(month === 10){
        setMonth("October")
      }
      if(month === 11){
        setMonth("November")
      }
      if(month === 12){
        setMonth("December")
      }
      console.log(year)
      setYear(year)
    };

    return (
        <Box>
            <CardContent sx={{ padding: theme => `${theme.spacing(5,5,5)} !important`}}>
              <Calendar onDateChange={dateChangeHandler} />
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Month</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                </table>
                <h1> Important Appointments</h1>
                <tbody>
                <tr>
                  <td>{date} {month} {year}: </td>
                </tr>
              </tbody>
            </CardContent>
        </Box>
    )
  }

export default CalendarPage;