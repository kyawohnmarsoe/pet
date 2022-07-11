// ** React Imports
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getClinic } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import PlanCard from './PlanCard'
import ClinicInfoCard from './ClinicInfoCard'
import UserTimeline from './UserTimeline'
// import InvoiceList from '../../invoice/list'
import PermissionsTable from './PermissionsTable'

// ** Styles
import '@styles/react/apps/app-users.scss'
import ClinicDetail from './ClinicDetail'
import ClinicUsers from './ClinicUsers'

const ClinicView = props => {
  // ** Vars
  const store = useSelector(state => state.clinics),
    dispatch = useDispatch(),
    { id } = useParams()

  // ** Get suer on mount
  useEffect(() => {
    dispatch(getClinic(parseInt(id)))
  }, [dispatch])

  return store.selectedClinic !== null && store.selectedClinic !== undefined ? (
    <div className='app-user-view'>
      <Row>
        <Col xl='12' lg='12' md='12'>
          <ClinicInfoCard selectedClinic={store.selectedClinic} />
        </Col>
        <Col xl='12' lg='12' md='12'>
          <ClinicDetail selectedClinic={store.selectedClinic} />
        </Col>
        <Col xl='12' lg='12' md='12'>
          {store.selectedClinic.users !== null ? store.selectedClinic.users.map(u => <ClinicUsers user={u} />) : 'Active'}

        </Col>

        <Col xl='3' lg='4' md='5'>
          {/* <PlanCard selectedClinic={store.selectedClinic} /> */}
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          {/* <InvoiceList /> */}
        </Col>
      </Row>
    </div>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>Clinic not found</h4>
      <div className='alert-body'>
        Clinic with id: {id} doesn't exist. Check list of all Clinics: <Link to='/apps/clinic/list'>Clinics List</Link>
      </div>
    </Alert>
  )
}
export default ClinicView
