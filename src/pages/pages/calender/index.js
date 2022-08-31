// ** React Imports

import React, { useState } from "react";


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
   
   
    return (
        <Box>
            <CardContent sx={{ padding: theme => `${theme.spacing(5,5,5)} !important`}}>
            
                <h1> Important Appointments</h1>
            </CardContent>
        </Box>
    )
  }

export default CalendarPage;