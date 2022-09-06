// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsBasic from 'src/views/form-layouts/FormLayoutsBasic'
import FormLayoutsIcons from 'src/views/form-layouts/FormLayoutsIcons'
import FormLayoutsSeparator from 'src/views/form-layouts/FormLayoutsSeparator'
import FormLayoutsAlignment from 'src/views/form-layouts/FormLayoutsAlignment'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import InvoiceTable from 'src/views/tables/InvoiceTable'

const FormLayouts = () => {
  return (
    <div>
      <InvoiceTable sx={{ marginBottom: 4 }} />
      
    {/* <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <FormLayoutsBasic />
          
        </Grid>
        <Grid item xs={12} md={6}>
          <FormLayoutsIcons />
        </Grid>
        <Grid item xs={12}>
          <FormLayoutsSeparator />
        </Grid>
        <Grid item xs={12}>
          <FormLayoutsAlignment />
        </Grid>
      </Grid>
    </DatePickerWrapper> */}
    </div>
  )
}

export default FormLayouts
