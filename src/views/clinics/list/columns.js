// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getClinic, deleteClinic } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

const statusObj = {
  pending: 'light-warning',
  active: 'light-success',
  inactive: 'light-secondary'
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
    cell: row => row.clinicName
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
      <UncontrolledDropdown>
        <DropdownToggle tag='div' className='btn btn-sm'>
          <MoreVertical size={14} className='cursor-pointer' />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            tag={Link}
            to={`/apps/clinic/view/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getClinic(row.id))}
          >
            <FileText size={14} className='mr-50' />
            <span className='align-middle'>Details</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/apps/clinic/edit/${row.id}`}
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
    )
  }
]
