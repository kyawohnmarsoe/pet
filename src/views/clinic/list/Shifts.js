import { useState } from 'react'
import Repeater from '@components/repeater'
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button, CustomInput } from 'reactstrap'
import { X, Plus, Trash2 } from 'react-feather'
import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import PickerTime from './PickerTime'


const Shifts = ({ day }) => {
    const [count, setCount] = useState(1)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const deleteForm = e => {
        e.preventDefault()
        e.target.closest('form').remove()
    }

    const [basic, setBasic] = useState(new Date())

    const [switchValue, setSwitchValue] = useState('off')
    const [shiftRow, setShiftRow] = useState('shift-rows-off')


    const switchOnChange = e => {
        if (e.target.checked) {
            setSwitchValue('on')
            setShiftRow(' shift-rows-on')
        } else {
            setSwitchValue('off')
            setShiftRow(' shift-rows-off')

        }
    }

    return (
        <>
            <div className="mt-2">
                <div className={`row m-0 ${shiftRow}`}>
                    <div className="day-title">{day}</div>
                    <span className="ml-auto petzola">
                        <CustomInput
                            type='switch'
                            id={day}
                            name='customSwitch'
                            inline
                            onChange={switchOnChange}
                        />
                    </span>
                </div>
            </div>

            {switchValue === 'on' ? (<Card>

                <div className='w-100 mt-2'>
                    <div className="row m-0 pr-2">
                        <span className="ml-auto">
                            <Button.Ripple className='btn-icon' color='primary' onClick={increaseCount}>
                                <Plus size={14} />
                                <span className='align-middle ml-25'>Add New</span>
                            </Button.Ripple>
                        </span>
                    </div>
                </div>


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
                                        <FormGroup>
                                            <Row>
                                                <Col md={12}>
                                                    {/* <span className="ml-auto"> */}
                                                    <Button.Ripple color='danger' className='text-nowrap px-1' onClick={deleteForm} outline>
                                                        <X size={14} className='mr-50' />

                                                    </Button.Ripple>
                                                    {/* </span> */}
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                    </Col>

                                </Row>
                            </Form>
                        )}
                    </Repeater>

                </CardBody>
            </Card>

            ) : null}

        </>
    )
}

export default Shifts
