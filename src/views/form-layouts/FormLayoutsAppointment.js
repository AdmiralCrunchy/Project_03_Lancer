import { useState, Fragment, useEffect } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack'

// ** Icons Imports
import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import CreditCardOutline from  'mdi-material-ui'
import CreditCardClockOutline from 'mdi-material-ui'

const FormLayoutsAppointment = () => {
  const [values, setValues] = useState({
    appointmentName: '',
    appointmentDate: '',
    appointmentTime: '',
    appointmentDuration: '',
    appointmentDescription: '',
    appointmentMemo: '',
    password: ''
  })

  const fetchNewAppointment = () => {
    if (typeof window !== 'undefined') {
    fetch("http://lancerbackend.herokuapp.com/appointments/", {
      method: 'POST', 
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        project_id: values.projectId,
        appointment_name: values.appointmentName,
        appointment_date: values.appointmentDate,
        appointment_time: values.appointmentTime,
        appointment_duration: values.appointmentDuration,
        description: values.appointmentDescription,
        appointment_memo: AppointmentMemo,
        password: values.password
      })
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        location.reload()

        // setValues({
        //   projectName: '',
        //   projectStatus: '',
        //   initialCharge: '',
        //   password: ''
        // })
      })
  }
  }
  
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const theme = useTheme()
  const router = useRouter()



  return (
    
    <div >
    <Card sx={{justifyContent: 'flex-end'}}>
      <CardHeader title='Set Up an Appointment' titleTypographyProps={{ variant: 'h6' }} align = "center"  />
      <CardContent>
        <form onSubmit={e => e.preventDefault()} >
          
          <Grid container spacing={5}  >
          
          <Grid item xs={12}>
              <TextField
                fullWidth
                label='Project Id'
                placeholder='What Project Is This Associated With?'
                value={values.projectId}
                onChange={handleChange('appointmentName')}
                sx={{ marginBottom: 2 }} 
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Appointment Name'
                placeholder='Title For Your Appointment.'
                value={values.appointmentName}
                onChange={handleChange('appointmentName')}
                sx={{ marginBottom: 2 }} 
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label = "Appointment Date"
                placeholder='Format: YYYY-MM-DD'
                value={values.appointmentDate}
                onChange={handleChange('appoinmentDate')}
                sx={{ marginBottom: 2 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label = "Appointment Time"
                placeholder='Format: HH:MM (Military Time)'
                value={values.appointmentTime}
                onChange={handleChange('appointmentTime')}
                sx={{ marginBottom: 2 }} 
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label = "Appointment Duration"
                placeholder='Best Practice is to set for 15 mins increments.'
                value={values.appointmentDuration}
                onChange={handleChange('appointmentDuration')}
                sx={{ marginBottom: 2 }} 
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label = "Appointment Description"
                placeholder='Short Description of Appointment details'
                value={values.appointmentDescription}
                onChange={handleChange('appointmentDescription')}
                sx={{ marginBottom: 2 }} 
              />
            </Grid>

            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label = "Appointment Memo"
                placeholder='Long form: Should Contain Details or Materials Each Party Needs For This Appointment.'
                value={values.appointmentMemo}
                onChange={handleChange('appointmentMemo')}
                sx={{ marginBottom: 2 }} 
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label = "Password"
                value={values.password}
                onChange={handleChange('password')}
                sx={{ marginBottom: 2 }} 
              />
            </Grid>
  
            <Grid item xs={12}>
            <Button
              fullWidth
              size='large'
              variant='contained'
              
              onClick={() => {
                fetchNewAppointment()
              }}
            >
              Create Appointment
            
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

export default FormLayoutsAppointment