import { Fragment, useState, useEffect } from 'react'
import Tabs from './Tabs'
import axios from 'axios'
import SettingsTabContent from './SettingsTabContent'
import Breadcrumbs from '@components/breadcrumbs'
import PayoutsTabContent from './PayoutsTabContent'
import AccountTabContent from './AccountTabContent'
import BusinessTabContent from './BusinessTabContent'
import NotificationsTabContent from './NotificationsTabContent'
import { Row, Col, TabContent, TabPane, Card, CardBody } from 'reactstrap'
import UILoader from '@components/ui-loader'

import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'
import { endPints } from '../../../configs/endPoints'
import ErrorBoundary from '../misc/ErrorBoundary'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('1'),
    [data, setData] = useState(null)

  const toggleTab = tab => {
    setActiveTab(tab)
  }

  useEffect(() => {
    // axios.get(`${endPints.baseUrl}/user`).then(response => setData(response.data.data) )
    axios.get(`${endPints.baseUrl}/user`).
      then(response => setData(response.data.data))
    // then(response => setData(response.data.data))

  }, [])

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Profile' breadCrumbActive='Profile' />
      <UILoader blocking={data === null}>
        {data !== null ? (
          <Fragment>
            <Row>
              <Col className='mb-2 mb-md-0' md='12'>
                <Tabs activeTab={activeTab} toggleTab={toggleTab} />
              </Col>
            </Row>
            <Row>
              <Col md='12'>
                <Card>
                  <CardBody>
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId='1'>
                        <AccountTabContent data={data} />
                      </TabPane>
                      <TabPane tabId='2'>
                        <BusinessTabContent />
                      </TabPane>
                      <TabPane tabId='3'>
                        <ErrorBoundary>
                          <SettingsTabContent data={data} />
                        </ErrorBoundary>
                      </TabPane>
                      <TabPane tabId='4'>
                        <ErrorBoundary>
                          <PayoutsTabContent data={data} />
                        </ErrorBoundary>
                      </TabPane>
                      <TabPane tabId='5'>
                        {/* <NotificationsTabContent data={data} /> */}
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Fragment>
        ) : null}
      </UILoader>
    </Fragment>
  )
}

export default Profile
