import { useState } from 'react'
import Repeater from '@components/repeater'
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { X, Plus } from 'react-feather'
import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import PickerTime from './PickerTime'


const Shifts = () => {
    const [count, setCount] = useState(1)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const deleteForm = e => {
        e.preventDefault()
        e.target.closest('form').remove()
    }

    const [basic, setBasic] = useState(new Date())

    return (
        <Card>
            <CardHeader>
                <div className='card-title w-100'>
                    <div className="row m-0">
                        <span className="ml-auto">
                            <Button.Ripple className='btn-icon' color='primary' onClick={increaseCount}>
                                <Plus size={14} />
                                <span className='align-middle ml-25'>Add New</span>
                            </Button.Ripple>
                        </span>
                    </div>
                </div>
            </CardHeader>

            <CardBody>
                <Repeater count={count}>
                    {i => (
                        <Form key={i}>
                            <Row className='justify-content-between align-items-center'>
                                <Col md={5}>
                                    <FormGroup>
                                        <Row>
                                            <Col md={4}><Label for={`item-name-${i}`}>Start Shift</Label></Col>
                                            <Col md={8}> <PickerTime basic={basic} setBasic={setBasic} /></Col>
                                        </Row>
                                    </FormGroup>
                                </Col>

                                <Col md={5}>
                                    <FormGroup>
                                        <Row>
                                            <Col md={4}><Label for={`item-name-${i}`}>End Shift</Label></Col>
                                            <Col md={8}> <PickerTime basic={basic} setBasic={setBasic} /></Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <div className="row m-0">
                                        <span className="ml-auto">
                                            <Button.Ripple color='danger' className='text-nowrap px-1' onClick={deleteForm} outline>
                                                <X size={14} className='mr-50' />

                                            </Button.Ripple>
                                        </span>
                                    </div>

                                </Col>

                            </Row>
                        </Form>
                    )}
                </Repeater>

            </CardBody>
        </Card>
    )
}

export default Shifts
