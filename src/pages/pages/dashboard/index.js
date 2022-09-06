// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import ProjectTable from 'src/views/tables/projectTable'
import InvoiceTable from 'src/views/tables/InvoiceTable'
import ClientTable from 'src/views/tables/ClientTable'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import TrendingUp from 'mdi-material-ui/TrendingUp'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

import { permCheck } from '../../../permcheck'

// FETCH REQ (TOTAL BALANCE, ONGOING PROJECT #, NEW PROJ #, # OF CLINETS)



const Dashboard = () => {
  useEffect(() => {
    permCheck()

  }, [])

  return (

    <div>
      <InvoiceTable sx={{marginBottom: 4}} />
      <ProjectTable sx={{marginBottom: 4}} />
      <ClientTable sx={{marginBottom: 4}} />
    </div>


  )
}

export default Dashboard
