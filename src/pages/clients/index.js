// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import {useEffect} from 'react'

// ** Demo Components Imports
import ClientTable from 'src/views/tables/ClientTable'



const clientTable = () => {
  // useEffect(() => {
    // if (typeof window !== 'undefined') {
  //   fetch("http://lancerbackend.herokuapp.com/developers/verify", {
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
  //     console.log(data.dev)
  //     if(!data.dev){
  //       if (typeof window !== 'undefined') {
  //         localStorage.clear();
  //         window.location.href= "/"
  //       }
  //     }
  
  //     })
// }
  //    }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            Your Clients
          </Link>
        </Typography>
        <Typography variant='body2'>Work WITH your clients, not FOR your clients
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Clients' titleTypographyProps={{ variant: 'h6' }} />
          <ClientTable />
        </Card>
      </Grid>
    </Grid>
  );
}

export default clientTable