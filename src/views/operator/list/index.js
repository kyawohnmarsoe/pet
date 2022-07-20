// ** User List Component
import { useState } from 'react'
import { Button, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import axios from 'axios'
import Table from './Table'

// ** Styles
import '@styles/react/apps/app-users.scss'

const OperatorsList = () => {

  const token = localStorage.getItem("accessToken")
  const api = 'https://petzola-business.herokuapp.com/customer/search'
  const bodyParams = {
    clinicId:"1"
  }
  
  axios.post(api, bodyParams, { headers: {Authorization : "${token}"} })
  .then(res => {
      console.log(res.data)
  
    })

  return (
    <div className='app-user-list'>
      <Table />

    </div>
  )
}

export default OperatorsList
