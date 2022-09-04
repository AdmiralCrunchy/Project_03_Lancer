// ** React Imports
import {  forwardRef, useState, useEffect } from 'react';



// ** MUI Imports
import SendIcon from 'mdi-material-ui/SendOutline';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import CreditCardClockOutline from 'mdi-material-ui/CreditCardClockOutline'
import AccountClockOutline from 'mdi-material-ui/AccountClockOutline'
import BankOutline from 'mdi-material-ui/BankOutline'
import DatePicker from 'react-datepicker'
import { permCheck } from '../../permcheck'

// ** Icons Imports

const Item = styled('div')(({ theme }) => ({
  
  border: '1px solid',
  borderColor: theme.palette.mode === 'light' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

const FormLayoutsBasic = () => {
  // ** States
  useEffect(() => {
    permCheck()
  
     }, [])

  const Form = styled('form')(({ theme }) => ({
    maxWidth: 400,
    padding: theme.spacing(12),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`
  }))  
  
  const CustomInput = forwardRef((props, ref) => {
    return <TextField fullWidth {...props} inputRef={ref} label='Due Date' autoComplete='off' />
  })

  const [date, setDate] = useState(null)
  const [name, setName] = useState([])
  
  const [values, setValues] = useState({
    projectName:"",
    paymentDate: "",
    paymentSum: "",
    projectId: ""
  })

//   const[projects, setProjects] = useState([{
//     id: "",
//     projectName: "",
//     projectStatus: "",
//     initialCharge: "",
//     balance: ""
// }])

  // useEffect(() => {
    // if (typeof window !== 'undefined') {
  //   fetch("http://lancerbackend.herokuapp.com/developers/home", {
  //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors',
  //     contentType: 'application/json',
  //     headers: {
  //     'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  //     "Access-Control-Allow-Origin": "*"
  //   }
  //   })
  //    .then(res => res.json())
  //    .then((data) =>{
  //     console.log(data)
  //     const holdingArray = []
  //     data.Projects.map(project => {
  //       let details = {
  //         id: project.id,
  //         projectName: project.project_name,
  //       }
  //       holdingArray.push(details)

  //     })
  //       setProjects(holdingArray)
  //    }
  //    )
  // }, [])

 
  const fetchNewInvoice = () => {
    if (typeof window !== 'undefined') {
    fetch("http://lancerbackend.herokuapp.com/projects/invoices", {
      method: 'POST', 
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        project_name: values.projectName,
        payment_date: values.paymentDate,
        payment_sum: values.paymentSum,
        project_id: values.projectId
      })
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        location.reload()
      })
  }
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleSelectChange = event => {
    setName(event.target.value)
  }

  return (
    <Card>
      <CardHeader title='Invoice' titleTypographyProps={{ variant: 'h1' }} sx={{marginBottom: 4}}/>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid>
           <Grid >
            <FormControl fullWidth>
              <TextField
                fullWidth
                label = 'Project Name'
                value ={values.projectName}
                onChange ={handleChange("projectName")} 
                
              />
                {/* <Select 
                  multiple
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  label= 'Project Name'
                  input={<OutlinedInput  id='select-multiple-language' />}
                >
                 {projects && <MenuItem id={projects.id} value={projects.projectName}></MenuItem>}
                </Select> */}
              </FormControl>
            </Grid>
            </Grid>     
                
            <Grid  item sx={{marginTop:4}} >
            <TextField
                fullWidth
                align="center"
                label = 'Project Id'
                value ={values.projectId}
                onChange ={handleChange("projectId")} 
                
              />
           </Grid>
            <Grid  item sx={{marginTop:4}} >
            <TextField
                fullWidth
                align="center"
                label = 'Payment Due Date'
                value ={values.paymentDate}
                onChange ={handleChange("paymentDate")} 
                
              />
            {/* <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='YYYY-MM-DD'
                customInput={<CustomInput />}
                id='form-layouts-separator-date'
                values = {values.paymentDate}
                onChange={date => setDate(date)}
              /> */}
                
                
              
            </Grid>
            <Grid item sx={{marginTop:4}}>
              <FormControl fullWidth>
              <TextField
                fullWidth
                type='number'
                label = 'Amount Due'
                value ={values.paymentSum}
                onChange ={handleChange("paymentSum")} 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>$
                     
                    </InputAdornment>
                  )
                }}
              />
               
              </FormControl>
            </Grid>
         
            <Grid item sx={{marginTop:4}}>
            <Stack direction="row" spacing={2}>
              <Button 
              type='submit' 
              variant='contained' 
              size='large' 
              color='success'
              onClick={() => {
                fetchNewInvoice()
              }}
              endIcon={<SendIcon />}>
                Send Invoice
              </Button>
              </Stack>
              </Grid>
           
          </form>
          </CardContent>
          </Card>
         
          
          
         
    
    
    
  )
}

export default FormLayoutsBasic
