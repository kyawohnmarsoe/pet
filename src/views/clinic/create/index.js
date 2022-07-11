// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Breadcrumbs from '@components/breadcrumbs'


// ** User Edit Components
import SocialTab from './Social'
import ClinicAccountTab from './Account'
import InfoTab from './Information'

// ** Store & Actions
import { getClinic } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import { User, Info, Share2 } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'
import '@styles/react/libs/react-select/_react-select.scss'


const ClinicCreate = () => {
    // ** States & Vars
    const [activeTab, setActiveTab] = useState('1'),
        dispatch = useDispatch()

    // ** Function to toggle tabs
    const toggle = tab => setActiveTab(tab)

    return (
        <Row className='app-user-edit'>

            <Col sm='12'>
                <Breadcrumbs breadCrumbTitle='Clinics' breadCrumbActive='Clinics Edit' />
                <Card>
                    <CardBody className='pt-2'>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId='1'>
                                <ClinicAccountTab />
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
export default ClinicCreate
