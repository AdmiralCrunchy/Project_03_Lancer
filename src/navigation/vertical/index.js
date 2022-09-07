// ** Icon imports
import {Login, Table, CubeOutline, HomeOutline, FormatLetterCase, AccountCogOutline, CreditCardOutline, AccountPlusOutline, AlertCircleOutline, GoogleCirclesExtended, Calendar , CurrencyUsd, AccountMultiple} from 'mdi-material-ui'

import MaterialUi from 'mdi-material-ui/MaterialUi'

const listTitle = () => {
  if(typeof window !== 'undefined'){
    console.log("nice")
    if(JSON.parse(localStorage.getItem("type")) === "developer"){
      return "Client List"
    }else{
      return "Developer List"
    }
  }
}

const navigation = () => {

  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/pages/dashboard'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Projects',
      icon: AlertCircleOutline,
      path: '/pages/projects',
      children: [
        {
          title: 'Test1',
          path: '/components1'
        }
      ]
    },
    {
      title: 'Dates',
      icon: Calendar,
      path: '/pages/calender'
    },
    {
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
      title: listTitle(),
      icon: AccountMultiple,
      path: '/clients'
    },
    {
      title: 'Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
  ]
}

export default navigation
