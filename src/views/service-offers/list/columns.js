// ** React Imports
import { useState } from 'react'

import { Link } from 'react-router-dom'

// ** Store & Actions
import { deleteOffer, getOffer } from '../store/action'
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
    name: 'Clinic',
    minWidth: '120px',
    selector: 'Clinic',
    sortable: true,
    cell: row => (
      <span>{row.clinicID}</span>
    )
  },
  {
    name: 'Service Offer Title',
    minWidth: '172px',
    selector: 'serviceOffer',
    sortable: true,
    cell: row => row.offerTite
  },
  {
    name: 'Main Service Category',
    minWidth: '172px',
    selector: 'ServiceCategory',
    sortable: true,
    cell: row => row.serviceCateory
  },

  {
    name: 'Subcategory',
    minWidth: '120px',
    selector: 'Subcategory',
    sortable: true,
    cell: row => row.subCateory
  },
  {
    name: 'Service Location',
    minWidth: '120px',
    selector: 'serviceLocation',
    sortable: true,
    cell: row => row.serviceLocation
  },
  {
    name: 'Assigned Operator',
    minWidth: '120px',
    selector: 'assignedOperator',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' pill>
       {row.assignedOperators}
      </Badge>
    )
  },
  {
    name: 'Rate',
    minWidth: '120px',
    selector: 'Rate',
    sortable: true,
    cell: row => row.firstVisitPrice
  },
  {
    name: 'Status',
    minWidth: '120px',
    selector: 'status',
    sortable: true,
    cell: row => row.status
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
              to={`/service-offer/view/${row.id}`}
              className='w-100'
              onClick={() => store.dispatch(getOffer(row.id))}
            >
              <FileText size={14} className='mr-50' />
              <span className='align-middle'>Details</span>
            </DropdownItem>
            <DropdownItem
              tag={Link}
              to={`/service-offer/edit/${row.id}`}
              className='w-100'
              onClick={() => store.dispatch(getOffer(row.id))}
            >
              <Archive size={14} className='mr-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>

            <DropdownItem className='w-100' onClick={() => store.dispatch(deleteOffer(row.id))}>
              <Trash2 size={14} className='mr-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      
      </>
    )
  }
]
