import { Fragment, useState, useEffect } from 'react'
import Tabs from './Tabs'
import axios from 'axios'
import InfoTabContent from './InfoTabContent'
import Breadcrumbs from '@components/breadcrumbs'
import SocialTabContent from './SocialTabContent'
import GeneralTabContent from './GeneralTabContent'
import PasswordTabContent from './PasswordTabContent'
import NotificationsTabContent from './NotificationsTabContent'
import { Row, Col, TabContent, TabPane, Card, CardBody } from 'reactstrap'
import UILoader from '@components/ui-loader'

import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'
import { endPints } from '../../../configs/endPoints'

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState('1'),
    [data, setData] = useState(null)

  const toggleTab = tab => {
    setActiveTab(tab)
  }

  useEffect(() => {
    axios.get(`${endPints.baseUrl}/user`).then(response => setData(response.data.data))
  }, [])

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Account Settings' breadCrumbActive='Account Settings' />
      <UILoader blocking={data === null}>
        {data !== null ? (
          <Row>
            <Col className='mb-2 mb-md-0' md='3'>
              <Tabs activeTab={activeTab} toggleTab={toggleTab} />
            </Col>
            <Col md='9'>
              <Card>
                <CardBody>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId='1'>
                      <GeneralTabContent data={data} />
                    </TabPane>
                    <TabPane tabId='2'>
                      <PasswordTabContent />
                    </TabPane>
                    <TabPane tabId='3'>
                      {/* <InfoTabContent data={data} /> */}
                    </TabPane>
                    <TabPane tabId='4'>
                      {/* <SocialTabContent data={data} /> */}
                    </TabPane>
                    <TabPane tabId='5'>
                      {/* <NotificationsTabContent data={data} /> */}
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ) : null}
      </UILoader>
    </Fragment>
  )
}

export default AccountSettings
