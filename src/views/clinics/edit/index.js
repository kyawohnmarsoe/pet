// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** User Edit Components
import SocialTab from './Social'
import AccountTab from './Account'
import InfoTab from './Information'

// ** Store & Actions
import { getClinic } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import { User, Info, Share2 } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'

const ClinicEdit = () => {
  // ** States & Vars
  const [activeTab, setActiveTab] = useState('1'),
    store = useSelector(state => state.clinics),
    dispatch = useDispatch(),
    { id } = useParams()

  // ** Function to toggle tabs
  const toggle = tab => setActiveTab(tab)

  // ** Function to get clinic on mount
  useEffect(() => {
    dispatch(getClinic(parseInt(id)))
    return () => dispatch(getClinic(parseInt(0)))
  }, [dispatch, id])

  return store.selectedClinic !== null && store.selectedClinic !== undefined ? (
    <Row className='app-user-edit'>
      <Col sm='12'>
        <Card>
          <CardBody className='pt-2'>
            <Nav pills>
              <NavItem>
                <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
                  <User size={14} />
                  <span className='align-middle d-none d-sm-block'>Account</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={activeTab === '2'} onClick={() => toggle('2')}>
                  <Info size={14} />
                  <span className='align-middle d-none d-sm-block'>Information</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={activeTab === '3'} onClick={() => toggle('3')}>
                  <Share2 size={14} />
                  <span className='align-middle d-none d-sm-block'>Social</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <AccountTab selectedClinic={store.selectedClinic} />
              </TabPane>
              <TabPane tabId='2'>
                <InfoTab />
              </TabPane>
              <TabPane tabId='3'>
                <SocialTab />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>Clinic not found</h4>
      <div className='alert-body'>
        Clinic with id: {id} doesn't exist. Check list of all Clinics: <Link to='/apps/clinic/list'>Clinics List</Link>
      </div>
    </Alert>
  )
}
export default ClinicEdit
