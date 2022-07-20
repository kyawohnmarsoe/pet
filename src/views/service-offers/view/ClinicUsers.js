// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone } from 'react-feather'

const ClinicUser = ({ user }) => {

    return (
        <Card>
            <CardBody>
                <Row>

                    <Col xl='6' lg='6' className='mt-2 mt-xl-0'>
                        <div className='user-info-wrapper'>
                            <div className='d-flex flex-wrap align-items-center my-50'>
                                <div className='user-info-title'>

                                    <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                                        Name
                                    </CardText>
                                </div>
                                <CardText className='text-capitalize mb-0'>

                                    {user !== null ? user.firstname : 'Active'}  {user !== null ? user.lastname : 'Active'}
                                </CardText>
                            </div>
                        </div>
                    </Col>
                    <Col xl='6' lg='6' className='mt-2 mt-xl-0'>
                        <div className='user-info-wrapper'>
                            <div className='d-flex flex-wrap align-items-center my-50'>
                                <div className='user-info-title'>

                                    <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                                        Mobile Number
                                    </CardText>
                                </div>
                                <CardText className='text-capitalize mb-0'>

                                    {user !== null ? user.mobile : 'Active'}
                                </CardText>
                            </div>
                        </div>
                    </Col>

                    <Col xl='6' lg='6' className='mt-2 mt-xl-0'>
                        <div className='user-info-wrapper'>
                            <div className='d-flex flex-wrap align-items-center my-50'>
                                <div className='user-info-title'>

                                    <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                                        Email
                                    </CardText>
                                </div>
                                <CardText className='text-capitalize mb-0'>
                                    {user !== null ? user.email : 'Admin'}
                                </CardText>
                            </div>
                        </div>
                    </Col>
                    <Col xl='6' lg='6' className='mt-2 mt-xl-0'>
                        <div className='user-info-wrapper'>
                            <div className='d-flex flex-wrap align-items-center my-50'>
                                <div className='user-info-title'>

                                    <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                                        Role
                                    </CardText>
                                </div>
                                <CardText className='mb-0'>{user !== null ? user.roleInClinic : 'England'}</CardText>
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
                                    {user !== null ? user.country : 'eleanor.aguilar'}
                                </CardText>
                            </div>
                        </div>
                    </Col>

                </Row>
            </CardBody>
        </Card>
    )
}

export default ClinicUser
