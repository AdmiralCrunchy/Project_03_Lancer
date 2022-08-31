// ** Icon imports
import {Login, Table, CubeOutline, HomeOutline, FormatLetterCase, AccountCogOutline, CreditCardOutline, AccountPlusOutline, AlertCircleOutline, GoogleCirclesExtended, Calendar , CurrencyUsd, AccountMultiple} from 'mdi-material-ui'
import MaterialUi from 'mdi-material-ui/MaterialUi'
const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Projects',
      icon: HomeOutline,
      path: '/projects',
      children: [
        {
          title: 'Test1',
          path: '/components1'
        }
      ]
    },
    {
      title: 'Calendar',
      icon: Calendar,
      path: '/calender'
    },
    {
      title: 'Billing',
      icon: CurrencyUsd,
      path: '/billing'
    },
    {
      title: 'Client List',
      icon: AccountMultiple,
      path: '/clients'
    },
    {
      title: 'Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Login'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      sectionTitle: '404 Example'
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'User Interface Examples'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    },
    {
      icon: MaterialUi,
      title: 'MUI Docs',
      externalLink: true,
      openInNewTab: true,
      path: 'https://mui.com/material-ui/getting-started/usage/'
    }
  ]
}

export default navigation
