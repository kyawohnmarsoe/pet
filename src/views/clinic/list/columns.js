// ** React Imports
import { useState } from 'react'

import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getClinic, deleteClinic } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Button, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive, Calendar } from 'react-feather'
import WorkDays from './WorkDays'

const statusObj = {
  pending: 'light-warning',
  active: 'light-success',
  inactive: 'light-secondary'
}

const getWorkDays = (id) => {
  const [workDaysOpen, setWorkDaysOpen] = useState(false)
  const toggleWorkDays = () => setWorkDaysOpen(!workDaysOpen)
  return (
    <>
      <span className='align-middle' onClick={toggleWorkDays}><Calendar size={20} /></span>

      <WorkDays open={workDaysOpen} toggleWorkDays={toggleWorkDays} id={id} />
    </>
  )
}

export const columns = [
  {
    name: 'Clinis Name',
    minWidth: '297px',
    selector: 'clinicName',
    sortable: true,
    cell: row => row.clinicName
  },
  {
    name: 'Location',
    minWidth: '300px',
    selector: 'address',
    sortable: true,
    cell: row => row.address.city
  },
  {
    name: 'Phone',
    minWidth: '172px',
    selector: 'phone',
    sortable: true,
    cell: row => row.phone
  },

  {
    name: 'Status',
    minWidth: '120px',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.status]} pill>
        {row.status}
      </Badge>
    )
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
              to={`/clinic/view/${row.id}`}
              className='w-100'
              onClick={() => store.dispatch(getClinic(row.id))}
            >
              <FileText size={14} className='mr-50' />
              <span className='align-middle'>Details</span>
            </DropdownItem>
            <DropdownItem
              tag={Link}
              to={`/clinic/edit/${row.id}`}
              className='w-100'
              onClick={() => store.dispatch(getClinic(row.id))}
            >
              <Archive size={14} className='mr-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>

            <DropdownItem className='w-100' onClick={() => store.dispatch(deleteClinic(row.id))}>
              <Trash2 size={14} className='mr-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        {getWorkDays()}
      </>
    )
  }
]
