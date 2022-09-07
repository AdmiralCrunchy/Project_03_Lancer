import React, { useState, useEffect } from 'react'
// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'

export default function StatisticsCard () {

const [page, setPage] = useState(0)
const [rowsPerPage, setRowsPerPage] = useState(5)
const [projects, setProjects]= useState(null)

useEffect(() => {
  fetch("http://lancerbackend.herokuapp.com/developers/home", {
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
    const holdingArray = []
    if(!data.Projects){return}
    data.Projects.map(project => {
      let details = {
        id: project.id,
        email: project.Client.email,
        projectName: project.project_name,
        projectStatus: project.project_status,
        initialCharge: project.initial_charge,
        balance: project.balance
      }
      holdingArray.push(details)

    })
      setProjects(holdingArray)
   }
   )
}, [])
// console.log(projects[0].projectName)

const statData = [
  {
    stats: '',
    title: 'Deadline',
    color: 'primary',
    icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '2',
    color: 'warning',
    title: 'Scheduled Projects',
    icon: <CellphoneLink sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '$88k',
    color: 'success',
    title: 'Payment Due',
    icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '12.5k',
    title: 'Client Info',
    color: 'info',
    icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
  },
]



const renderStats = () => {
  return statData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}
return (
  <div>
        <Card>
      <CardHeader
        title='{projects.projectName}'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  </div>
)
}
