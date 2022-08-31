// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import ClientTable from 'src/views/tables/ClientTable'

const clientTable = () => {
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