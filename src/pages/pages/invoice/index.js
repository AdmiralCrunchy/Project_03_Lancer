// ** MUI Imports
import Grid from '@mui/material/Grid'




// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import Box from '@mui/material/Box'

// ** Demo Components Imports

import FormLayoutsBasic from 'src/views/form-layouts/FormLayoutsBasic'
import InvoiceTable from 'src/views/tables/InvoiceTable'
import FormLayoutsIcons from 'src/views/form-layouts/FormLayoutsIcons'
import FormLayoutsSeparator from 'src/views/form-layouts/FormLayoutsSeparator'
import FormLayoutsAlignment from 'src/views/form-layouts/FormLayoutsAlignment'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'




const FormLayouts = () => {
    
  return (
      <div>
        
        <DatePickerWrapper>
        <Grid container spacing={10}>
          <Grid item xs={12} md={8}>
            <FormLayoutsBasic />
            <InvoiceTable/>
        </Grid>
          </Grid>
         
        </DatePickerWrapper>
        </div>

    
    )
}

             


export default FormLayouts