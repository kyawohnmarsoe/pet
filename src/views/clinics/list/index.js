// ** User List Component
import { useState } from 'react'
import { Button, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import Table from './Table'

// ** Styles
import '@styles/react/apps/app-users.scss'

const ClinicsList = () => {

  return (
    <div className='app-user-list'>
      <Table />

    </div>
  )
}

export default ClinicsList
