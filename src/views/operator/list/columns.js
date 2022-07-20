// ** React Imports
import { useState } from 'react'

import { Link } from 'react-router-dom'

// ** Store & Actions
import { deleteOpeartor, getOperator } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Button, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive, Calendar } from 'react-feather'

const statusObj = {
  disable: 'light-warning',
  enabled: 'light-success'
}


export const columns = [
  {
    name: 'Name',
    minWidth: '120px',
    selector: 'Name',
    sortable: true,
    cell: row => (
      <span>{row.firstName } {row.lastName}</span>
    )
  },
  {
    name: 'Contact Number',
    minWidth: '172px',
    selector: 'contactNumber',
    sortable: true,
    cell: row => row.mobileNumber
  },
  {
    name: 'Email',
    minWidth: '172px',
    selector: 'email',
    sortable: true,
    cell: row => row.email
  },

  {
    name: 'Role(s)',
    minWidth: '120px',
    selector: 'role',
    sortable: true,
    cell: row => row.assignedRoles
  },
  {
    name: 'Clinic(s)',
    minWidth: '120px',
    selector: 'clinic',
    sortable: true,
    cell: row => row.assignedClinics
  },
  {
    name: 'Status',
    minWidth: '120px',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.status]} pill>
       {row.enabled}
      </Badge>
    )
  },
  {
    name: 'License Key',
    minWidth: '120px',
    selector: 'license',
    sortable: true,
    cell: row => row.licenseKey
  },
  {
    name: 'License Expiry',
    minWidth: '120px',
    selector: 'licenseExpiry',
    sortable: true,
    cell: row => row.licenseExpiry
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: row => (
      <>
        <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <MoreVertical size={14} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem
              tag={Link}
              to={`/operator/view/${row.id}`}
              className='w-100'
              onClick={() => store.dispatch(getOperator(row.id))}
            >
              <FileText size={14} className='mr-50' />
              <span className='align-middle'>Details</span>
            </DropdownItem>
            <DropdownItem
              tag={Link}
              to={`/operator/edit/${row.id}`}
              className='w-100'
              onClick={() => store.dispatch(getOperator(row.id))}
            >
              <Archive size={14} className='mr-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>

            <DropdownItem className='w-100' onClick={() => store.dispatch(deleteOperator(row.id))}>
              <Trash2 size={14} className='mr-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      
      </>
    )
  }
]
