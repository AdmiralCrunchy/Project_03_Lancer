// ** React Imports
import { useState } from 'react';


// ** MUI Imports
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
      <CardHeader title='Invoice' titleTypographyProps={{ variant: 'h6' }} sx={{marginBottom: 10, display: 'center'}}/>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={15}>
          <Typography variant='body2' sx={{ fontWeight: 400 }} sx={{marginBottom: 6}} sx={{marginLeft: 15}}>
              <p>Office 149, 450 South Brand Brooklyn </p>

              <p>San Diego County, CA 91905, USA</p>

              <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
          </Typography>

            <Grid item xs={8} sx={{marginRight:50}}>
              <TextField 
              fullWidth 
              type= 'input'
              label='Invoice #' 
              InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                     
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                type='date'
                label= 'Date Issued'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                     
                    </InputAdornment>
                  )
                }}
                
              />
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth>
              <TextField
                fullWidth
                type='date'
                label = 'Date Due'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                     
                    </InputAdornment>
                  )
                }}
              />
              </FormControl>
            </Grid>
            <Grid item sm={10}>
            <Divider sx={{ marginBottom: 10 }} />
            </Grid>
            <CardHeader title='Invoice To:' titleTypographyProps={{ variant: 'h6' }}  sx={{marginLeft: 15}}/>
            <Grid item xs={10} sm={4} >
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'></InputLabel>
                <Select
                  multiple
                  value={name}
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput  id='select-multiple-language' />}
                >
                  <MenuItem value='John'>John</MenuItem>
                  <MenuItem value='Melissa'>Melissa</MenuItem>
                  <MenuItem value='Sabrina'>Sabrina</MenuItem>
                  <MenuItem value='Tommy'>Tommy</MenuItem>
                  <MenuItem value='Oliver'>Oliver</MenuItem>
                  <MenuItem value='James'>James</MenuItem>
                  <MenuItem value='Alice'>Alice</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <CardHeader title='Total Cost:' titleTypographyProps={{ variant: 'h6' }}  sx={{marginLeft: 25}}/>
            <Grid item xs={0} sm={0} sx={{marginLeft: 135}}>
              <FormControl fullWidth>
              <TextField 
              fullWidth 
              type= 'input'
              label='Cost Per Hour' 
              InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                     <CreditCardClockOutline/>
                    </InputAdornment>
                  )
                }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={0} sm={0} sx={{marginLeft: 135}}>
              <FormControl fullWidth>
              <TextField 
              fullWidth 
              type= 'number'
              label='Total Hours' 
              InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                    <AccountClockOutline/> 
                    </InputAdornment>
                  )
                }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={0} sm={0} sx={{marginLeft: 135}}>
              <FormControl fullWidth>
              <TextField 
              fullWidth 
              type= 'input'
              label='Amount Due' 
              InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>$
                     
                    </InputAdornment>
                  )
                }}
                />
              </FormControl>
            </Grid>
            <Grid item sm={10}>
            <Divider sx={{ marginBottom: 10 }} />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large' color='success'>
                Send Invoice
              </Button>
              </Grid>
              <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large'>
                Preview > > >
              </Button>
              </Grid>
              <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large'  >
                Save Invoice 
              </Button>
              </Grid>
              <CardHeader title='Internet Banking:' titleTypographyProps={{ variant: 'h6' }}  sx={{marginLeft: 65}}/>
            <Grid item xs={10} sm={6} sx={{marginLeft:70}}>

              <FormControl fullWidth>
                <Select
                  multiple
                  value={name}
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput  id='select-multiple-language' />}
                >
                  <MenuItem value='PayPal'>PayPal</MenuItem>
                  
                </Select>
              </FormControl>
            </Grid>
            
          </Grid>
          </form>
          </CardContent>
          </Card>
          
          
         
    
    
    
  )
}

export default FormLayoutsBasic
