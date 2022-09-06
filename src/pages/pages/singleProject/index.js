import {useState} from 'react';

import {useRoute} from 'next/router';

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'

const SingleProject = (project) => {

return (
    <Box>
        <CardContent>
            <CardHeader>
                <h1>{project.name}</h1>
                
            </CardHeader>
        </CardContent>
    </Box>
)

}

export default SingleProject;