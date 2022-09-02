// ** React Imports
import {  forwardRef, useState } from 'react';


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
    password: '',
    showPassword: false
  })
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleSelectChange = event => {
    setName(event.target.value)
  }

  return (
    <Card>
      <CardHeader title='Invoice' titleTypographyProps={{ variant: 'h1' }} sx={{marginBottom: 10, display: 'center'}}/>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={30}>
           <Grid item xs={5} >
            <FormControl fullWidth>
              Project Name
                
                <Select 
                  multiple
                  value={name}
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  label= 'Project Name'
                  input={<OutlinedInput  id='select-multiple-language' />}
                >
                  <MenuItem value='...'></MenuItem>
                  <MenuItem value='...'></MenuItem>
                  <MenuItem value='...'></MenuItem>
                  <MenuItem value='...'></MenuItem>
                  <MenuItem value='...'></MenuItem>
                  <MenuItem value='...'></MenuItem>
                  <MenuItem value='...'></MenuItem>
                </Select>
              </FormControl>
            </Grid>
            </Grid>     
                
           
            <Grid  item xs={5} sx={{marginTop:15}}>
            <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                id='form-layouts-separator-date'
                onChange={date => setDate(date)}
              />
                
                
              
            </Grid>
            <Grid item xs={5} sx={{marginTop:15, display: 'center'}}>
              <FormControl fullWidth>
              <TextField
                fullWidth
                type='number'
                label = 'Amount Due'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>$
                     
                    </InputAdornment>
                  )
                }}
              />
               
              </FormControl>
            </Grid>
         
            <Grid item xs={12} sx={{marginTop:15}}>
            <Stack direction="row" spacing={2}>
              <Button 
              type='submit' 
              variant='contained' 
              size='large' 
              color='success'
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
