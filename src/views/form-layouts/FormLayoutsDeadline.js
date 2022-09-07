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

const FormLayoutsDeadline = () => {
  const [values, setValues] = useState({
    projectId: '',
    deadlineDate: '',
    deadlineDeliverable: '',
  })

  const fetchNewDeadline = () => {
    if (typeof window !== 'undefined') {
    fetch("http://lancerbackend.herokuapp.com/deadlines/", {
      method: 'POST', 
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        project_id: values.projectId,
        completion_date: values.deadlineDate,
        deliverable: values.deadlineDeliverable,
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
      <CardHeader title='Make a New Deadline' titleTypographyProps={{ variant: 'h6' }} align = "center"  />
      <CardContent>
        <form onSubmit={e => e.preventDefault()} >
          
          <Grid container spacing={5}  >

          <Grid item xs={12}>
              <TextField
                fullWidth
                label='Project ID'
                placeholder='What Project Is This Associated With?'
                value={values.projectId}
                onChange={handleChange('projectId')}
                sx={{ marginBottom: 2 }} 
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Deadline Date'
                placeholder='Format: YYYY-MM-DD'
                value={values.deadlineDate}
                onChange={handleChange('deadlineDate')}
                sx={{ marginBottom: 2 }} 
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label = "Deliverable Feature"
                placeholder='What Feature Are You Bringing To The Table?'
                value={values.deadlineDeliverable}
                onChange={handleChange('deadlineDeliverable')}
                sx={{ marginBottom: 2 }} 
              />
            </Grid>
  
            <Grid item xs={12}>
            <Button
              fullWidth
              size='large'
              variant='contained'
              
              onClick={() => {
                fetchNewDeadline()
              }}
            >
              Create Deadline
            
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

export default FormLayoutsDeadline
