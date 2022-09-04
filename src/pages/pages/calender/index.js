// // ** React Imports
import React, { useState, useEffect } from "react";

// import Calendar from "react-beautiful-calendar"

import { useRouter } from 'next/router'

// // ** MUI Components
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
import { permCheck } from '../../../permcheck'

// const Card = styled(MuiCard)(({ theme }) => ({
//     [theme.breakpoints.up('sm')]: { width: '100rem' }
//   }))

//   const createData = (day, month, year, name, status, appName, description) => {
//     return { day, month, year, name, status, appName, description}
//   }

//   const columns = [
//     {id: 'firstName', label: 'First Name', minWidth: 170,  align: 'center'},
//     {id: 'lastName', label: 'Last Name', minWidth: 170,  align: 'center'},
//     {id: 'email', label: 'E-mail', minWidth: 170, align: 'center'},
//     {id: 'phone', label: 'Phone', minWidth: 170, align: 'center'},
//     {id: 'address', label: 'Address', minWidth: 170, align: 'center'},
    
//   ]

//   const rows = [
//     createData(2,9,2022,`Let's Play`, 'Parker McKillop', 'Checking in', "Just a brief check up to see where we are in the project.")
//   ]
   
   
  function CalendarPage() {
   

//   // ** States
//     const [page, setPage] = useState(0)
//     const [rowsPerPage, setRowsPerPage] = useState(10)
//     const [rows, setRows] = useState(null)

//     const [day,setDate] = useState(2)
//     const [month,setMonth] = useState("September")
//     const [year,setYear] = useState(2022)
   
//     const dateChangeHandler = ([day, month, year]) => {
//       setDate(day)

    // useEffect(() => {
    //   permCheck()
    //    }, [])

    //    router = useRouter()

//     const [date,setDate] = useState("")
//     const [month,setMonth] = useState("")
//     const [year,setYear] = useState("")
   
//     const dateChangeHandler = ([date, month, year]) => {
//       // ...use the values here
      
//       console.log(date)
//       setDate(date)

//       if(month === 1){
//         setMonth("January")
//       }
//       if(month === 2){
//         setMonth("February")
//       }
//       if(month === 3){
//         setMonth("March")
//       }
//       if(month === 4){
//         setMonth("April")
//       }
//       if(month === 5){
//         setMonth("May")
//       }
//       if(month === 6){
//         setMonth("June")
//       }
//       if(month === 7){
//         setMonth("July")
//       }
//       if(month === 8){
//         setMonth("August")
//       }
//       if(month === 9){
//         setMonth("September")
//       }
//       if(month === 10){
//         setMonth("October")
//       }
//       if(month === 11){
//         setMonth("November")
//       }
//       if(month === 12){
//         setMonth("December")
//       }
//       setYear(year)
//     };

//     useEffect(() => {
    // if (typeof window !== 'undefined') {
//       fetch("http://lancerbackend.herokuapp.com/developers/home", {
//         method: 'GET', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors',
//         contentType: 'application/json',
//         headers: {
//           'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
//            "Access-Control-Allow-Origin": "*"
//     }
//       })
//        .then(res => res.json())
//        .then((data) =>{
//         console.log(data)
//         const holdingArray = []
//         if(!data.Projects){return}
//         data.Projects.map(project => {
//           let details = {
//             firstName: project.Client.first_name,
//             lastName: project.Client.last_name,
//             phone: project.Client.phone,
//             email: project.Client.email,
//             address: project.Client.address,
//           }
//           holdingArray.push(details)
  
//         })
//           setRows(holdingArray)
//        }
//        )}
//     }, [])

//     const totalAppointments = () => {
//       return (rows.length)
//     }

//     const handleChangePage = (event, newPage) => {
//       setPage(newPage)
//     }
  
//     const handleChangeRowsPerPage = event => {
//       setRowsPerPage(+event.target.value)
//       setPage(0)
//     }

    return (
        <div></div>


    )

//   }
  }
  
export default CalendarPage