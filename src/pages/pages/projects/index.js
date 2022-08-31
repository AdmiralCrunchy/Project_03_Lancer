// ** React Imports
import { useState } from 'react'

// ** Next Imports
import { useRouter } from 'next/router'
import SingleProject from '../singleProject'


// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'

// ** Demo Components Imports
import TableBasic from 'src/views/tables/projectTable'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '90rem' }
}))

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
                    </Grid>
            </CardContent>
        </Box>
    )
}

export default ProjectPage;