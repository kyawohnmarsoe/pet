// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'
import WorkDays from '../list/WorkDays'

// ** Utils
import { isObjEmpty } from '@utils'
import Select from 'react-select'


// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert, Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'


// ** Store & Actions
import { addClinic } from '../store/action'
import { useDispatch } from 'react-redux'

const ClinicAccountTab = () => {
  // serviceCategories
  const [serviceCategories, setServiceCategories] = useState([])
  const serviceOptions = [
    { value: 'General Consultation', label: 'General Consultation' },
    { value: 'Vaccination', label: 'Vaccination' },
    { value: 'Internal Medicine', label: 'Internal Medicine' }
  ]
  const serviceChange = (e) => {
    setServiceCategories(Array.isArray(e) ? e.map(x => x.value) : [])
    console.log(serviceCategories)
  }

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const { register, errors, handleSubmit } = useForm()

  // ** Function to handle form submit
  const onSubmit = values => {
    if (isObjEmpty(errors)) {

      // dispatch(
      //   addClinic({
      //     fullName: values['full-name'],
      //     company: values.company,
      //     role,
      //     username: values.username,
      //     country: values.country,
      //     contact: values.contact,
      //     email: values.email,
      //     currentPlan: plan,
      //     status: 'active',
      //     avatar: ''
      //   })
      // )
      console.log(values)
    }
  }

  const workingTimes = [
    { value: 'Saturday', label: 'Saturday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Thursday', label: 'Thursday' }
  ]


  const [formModal, setFormModal] = useState(false)

  const [workDaysOpen, setWorkDaysOpen] = useState(false)
  const toggleWorkDays = () => setWorkDaysOpen(!workDaysOpen)

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='clinicName'>
                Branch Name <span className='text-danger'>*</span>
              </Label>
              <Input
                name='clinicName'
                id='clinicName'
                innerRef={register({ required: true })}
                className={classnames({ 'is-invalid': errors['clinicName'] })}
              />
            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='status'>
                Status <span className='text-danger'>*</span>
              </Label>
              <div style={{ marginTop: '0.7rem' }}>
                <FormGroup check inline>
                  <Label check>
                    <Input type='radio' name='status' defaultChecked
                      innerRef={register({ required: true })}
                      className={classnames({ 'is-invalid': errors['status'] })}
                    /> Open
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input type='radio' name='status'
                      innerRef={register({ required: true })}
                      className={classnames({ 'is-invalid': errors['status'] })}
                    /> Close
                  </Label>
                </FormGroup>
              </div>
            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='serviceLocationType'>
                Service Location <span className='text-danger'>*</span>
              </Label>
              <Input
                type='select'
                id='serviceLocationType'
                name='serviceLocationType'
                innerRef={register({ required: true })}
                className={classnames({ 'is-invalid': errors['serviceLocationType'] })}
              >
                <option value='Clinic'>Clinic</option>
                <option value='Home'>Home</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='serviceCategory'>
                Service Category <span className='text-danger'>*</span>
              </Label>
              <Select
                isMulti
                name="serviceCategory"
                value={serviceOptions.filter(obj => serviceCategories.includes(obj.value))}
                options={serviceOptions}
                closeMenuOnSelect={false}
                innerRef={register({ required: true })}
                className={classnames({ 'is-invalid': errors['serviceCategory'] })}
                onChange={serviceChange}
              />

            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='xcoordinate'>
                X Coordinate <span className='text-danger'>*</span>
              </Label>
              <Input
                name='xcoordinate'
                id='xcoordinate'
                innerRef={register({ required: true })}
                className={classnames({ 'is-invalid': errors['xcoordinate'] })}
              />
            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='ycoordinate'>
                Y Coordinate <span className='text-danger'>*</span>
              </Label>
              <Input
                name='ycoordinate'
                id='ycoordinate'
                innerRef={register({ required: true })}
                className={classnames({ 'is-invalid': errors['ycoordinate'] })}
              />
            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='country'>
                Country <span className='text-danger'>*</span>
              </Label>
              <Input
                name='country'
                id='country'
                innerRef={register({ required: true })}
                className={classnames({ 'is-invalid': errors['country'] })}
              />
            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='city'>
                City <span className='text-danger'>*</span>
              </Label>
              <Input
                name='city'
                id='city'
                innerRef={register({ required: true })}
                className={classnames({ 'is-invalid': errors['city'] })}
              />
            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='landmark'>
                Landmark <span className='text-danger'>*</span>
              </Label>
              <Input
                name='landmark'
                id='landmark'
                innerRef={register({ required: true })}
                className={classnames({ 'is-invalid': errors['landmark'] })}
              />
            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='area'>
                Area <span className='text-danger'>*</span>
              </Label>
              <Input
                name='area'
                id='area'
                innerRef={register({ required: true })}
                className={classnames({ 'is-invalid': errors['area'] })}
              />
            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='street'>
                Street <span className='text-danger'>*</span>
              </Label>
              <Input
                name='street'
                id='street'
                innerRef={register({ required: true })}
                className={classnames({ 'is-invalid': errors['street'] })}
              />
            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='phone'>
                Phone <span className='text-danger'>*</span>
              </Label>
              <Input
                name='phone'
                id='phone'
                innerRef={register({ required: true })}
                className={classnames({ 'is-invalid': errors['phone'] })}
              />
            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='workingTimes'>
                Branch Workingdays <span className='text-danger'>*</span>
              </Label>
              <Row>
                <Col md='10' sm='10'>
                  <Select
                    isMulti
                    name="workingTimes"
                    options={workingTimes}
                    closeMenuOnSelect={false}
                  />
                </Col>
                <Col md='2' sm='2'>
                  <span className="ml-auto" onClick={toggleWorkDays}>
                    Edit
                  </span>
                </Col>
              </Row>
              <WorkDays open={workDaysOpen} toggleWorkDays={toggleWorkDays} id='35' />

            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='aboutClinic'>
                About Clinic <span className='text-danger'>*</span>
              </Label>
              <Input
                name='aboutClinic'
                id='aboutClinic'
                innerRef={register({ required: true })}
                className={classnames({ 'is-invalid': errors['aboutClinic'] })}
              />
            </FormGroup>
          </Col>
          <Col md='4' sm='12'></Col>
          <Col md='4' sm='12'></Col>
          <Col md='4' sm='12'></Col>
        </Row>

        {/* <FormGroup>
          <Label for='user-role'>User Role</Label>
          <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
            <option value='subscriber'>Subscriber</option>
            <option value='admin'>Admin</option>
          </Input>
        </FormGroup>

        <FormGroup className='mb-2' value={plan} onChange={e => setPlan(e.target.value)}>
          <Label for='select-plan'>Select Plan</Label>
          <Input type='select' id='select-plan' name='select-plan'>
            <option value='basic'>Basic</option>
            <option value='team'>Team</option>
          </Input>
        </FormGroup> */}

        <Button type='submit' className='mr-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline >
          Cancel
        </Button>
      </Form>
    </>
  )
}

export default ClinicAccountTab
