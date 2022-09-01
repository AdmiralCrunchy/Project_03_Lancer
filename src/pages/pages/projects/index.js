// ** React Imports
import { useState, useEffect } from 'react'
import "@asseinfo/react-kanban/dist/styles.css"

// ** Next Imports
import { useRouter } from 'next/router'


// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'

// ** Demo Components Imports
import TableBasic from 'src/views/tables/projectTable'
import UncontrolledBoard from 'src/Board/kanban.js'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '90rem' }
}))

useEffect(()=> {

}, []);

const ProjectPage = () =>{

    // ** Hook
    const theme = useTheme()
    const router = useRouter()

    return(
        <Box>
            <CardContent sx={{ padding: theme => `${theme.spacing(5,5,5)} !important`}}>
                <h1>Projects</h1>
                <p>You're active project are listed below</p>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <Card>
                            <CardHeader title='Active Projects' titleTypographyProps={{ variant: 'h6' }} />
                            <TableBasic />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sx={{alignItems: 'center', justifyContent: 'center'}}>
                            <UncontrolledBoard />
                        </Grid>
                    </Grid>
            </CardContent>
        </Box>
    )
}

export default ProjectPage