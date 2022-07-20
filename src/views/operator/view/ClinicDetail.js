// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone } from 'react-feather'

const ClinicDetail = ({ selectedClinic }) => {

    return (
        <Card>
            <CardBody>
                <Row>

                    <Col xl='6' lg='6' className='mt-2 mt-xl-0'>
                        <div className='user-info-wrapper'>
                            <div className='d-flex flex-wrap align-items-center my-50'>
                                <div className='user-info-title'>

                                    <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                                        Working Times
                                    </CardText>
                                </div>
                                <CardText className='text-capitalize mb-0'>

                                    {selectedClinic !== null ? selectedClinic.workingTimes.shifts.map(s => s.value) : 'Active'}
                                </CardText>
                            </div>
                        </div>
                    </Col>
                    <Col xl='6' lg='6' className='mt-2 mt-xl-0'>
                        <div className='user-info-wrapper'>
                            <div className='d-flex flex-wrap align-items-center my-50'>
                                <div className='user-info-title'>

                                    <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                                        Service Category
                                    </CardText>
                                </div>
                                <CardText className='text-capitalize mb-0'>

                                    {selectedClinic !== null ? selectedClinic.serviceCategory.map((s) => s.value) : 'Active'}
                                </CardText>
                            </div>
                        </div>
                    </Col>

                    <Col xl='6' lg='6' className='mt-2 mt-xl-0'>
                        <div className='user-info-wrapper'>
                            <div className='d-flex flex-wrap align-items-center my-50'>
                                <div className='user-info-title'>

                                    <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                                        Service Type
                                    </CardText>
                                </div>
                                <CardText className='text-capitalize mb-0'>
                                    {selectedClinic !== null ? selectedClinic.serviceLocationType : 'Admin'}
                                </CardText>
                            </div>
                        </div>
                    </Col>
                    <Col xl='6' lg='6' className='mt-2 mt-xl-0'>
                        <div className='user-info-wrapper'>
                            <div className='d-flex flex-wrap align-items-center my-50'>
                                <div className='user-info-title'>

                                    <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                                        Toll Free
                                    </CardText>
                                </div>
                                <CardText className='mb-0'>{selectedClinic !== null ? selectedClinic.tollFree : 'England'}</CardText>
                            </div>
                        </div>
                    </Col>

                    <Col xl='6' lg='6' className='mt-2 mt-xl-0'>
                        <div className='user-info-wrapper'>

                            <div className='d-flex flex-wrap align-items-start'>
                                <div className='user-info-title'>

                                    <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                                        Address
                                    </CardText>
                                </div>
                                <CardText className='mb-0'>
                                    {selectedClinic !== null ? selectedClinic.address.area : 'eleanor.aguilar'},
                                    {selectedClinic !== null ? selectedClinic.address.street : 'eleanor.aguilar'},<br />
                                    {selectedClinic !== null ? selectedClinic.address.city : 'eleanor.aguilar'},
                                    {selectedClinic !== null ? selectedClinic.address.country : 'eleanor.aguilar'}
                                </CardText>
                            </div>
                        </div>
                    </Col>

                </Row>
            </CardBody>
        </Card>
    )
}

export default ClinicDetail
