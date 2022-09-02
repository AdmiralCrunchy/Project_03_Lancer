// ** MUI Imports
import Grid from '@mui/material/Grid'
import {useEffect} from 'react'

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

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'

// FETCH REQ (TOTAL BALANCE, ONGOING PROJECT #, NEW PROJ #, # OF CLINETS)



const Dashboard = () => {
  useEffect(() => {
    fetch("http://lancerbackend.herokuapp.com/developers/verify", {
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
      console.log(data.dev)
      if(!data.dev){
        if (typeof window !== 'undefined') {
          localStorage.clear();
          window.location.href= "/"
        }
      }
  
      })
  
     }, [])

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
{/* TOTAL BALANCE */}
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
              />
            </Grid>
            <Grid item xs={6}>
{/* ONGOING */}
              <CardStatisticsVerticalComponent
                stats='78'
                title='Ongoing Projets'
                color='secondary'
                subtitle=' '
                icon={<TrendingUp />}
              />
            </Grid>
            <Grid item xs={6}>
{/* NEW PROJ */}
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
{/* # of CLIENTS */}
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                title='Clients'
                icon={<AccountOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
