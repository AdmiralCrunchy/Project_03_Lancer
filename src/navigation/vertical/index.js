// ** Icon imports
import {Login, Table, CubeOutline, HomeOutline, FormatLetterCase, AccountCogOutline, CreditCardOutline, AccountPlusOutline, AlertCircleOutline, GoogleCirclesExtended, Calendar , CurrencyUsd, AccountMultiple} from 'mdi-material-ui'

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
      path: '/projects'
    },
    {
      title: 'Calendar',
      icon: Calendar,
      path: '/calender'
    },
    {
      badgeContent: '3',
      title: 'Invoice',
      icon: CurrencyUsd,
      badgeColor:'success',
      path:'/pages/invoice',
      children:[
        {
          title:'Add',
          path: '/layouts/components/vertical',
        },
        {
          title: 'Preview',
          path: '/layouts/components/vertical',
        },
        {
          title: 'List',
          path: '/layouts/components/vertical'
        }
      ]
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
    }
  ]
}

export default navigation
