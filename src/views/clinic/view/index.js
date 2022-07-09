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
import UserInfoCard from './UserInfoCard'
import UserTimeline from './UserTimeline'
// import InvoiceList from '../../invoice/list'
import PermissionsTable from './PermissionsTable'

// ** Styles
import '@styles/react/apps/app-users.scss'

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
        <Col xl='9' lg='8' md='7'>
          <UserInfoCard selectedClinic={store.selectedClinic} />
        </Col>
        <Col xl='3' lg='4' md='5'>
          {/* <PlanCard selectedClinic={store.selectedClinic} /> */}
        </Col>
      </Row>
      <Row>
        <Col md='6'>
          <UserTimeline />
        </Col>
        <Col md='6'>
          <PermissionsTable />
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
