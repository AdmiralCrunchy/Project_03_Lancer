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

const FormLayoutsProject = () => {
  const [values, setValues] = useState({
    projectName: '',
    projectStatus: '',
    initialCharge: '',
    password: ''
  })

  const fetchNewProject = () => {
    if (typeof window !== 'undefined') {
    fetch("http://lancerbackend.herokuapp.com/projects/", {
      method: 'POST', 
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        project_name: values.projectName,
        project_status: values.projectStatus,
        initial_charge: values.initialCharge,
        balance: values.initialCharge,
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
      <CardHeader title='Create something new!' titleTypographyProps={{ variant: 'h6' }} align = "center"  />
      <CardContent>
        <form onSubmit={e => e.preventDefault()} >
          
          <Grid container spacing={5}  >

            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Project Name'
                placeholder='Name your next creation!'
                value={values.projectName}
                onChange={handleChange('projectName')}
                sx={{ marginBottom: 2 }} 
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label = "Initial Status"
                value={values.projectStatus}
                onChange={handleChange('projectStatus')}
                sx={{ marginBottom: 2 }} 
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label = "Payment Due"
                value={values.initialCharge}
                onChange={handleChange('initialCharge')}
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
                fetchNewProject()
              }}
            >
              Create Project
            
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

export default FormLayoutsProject
