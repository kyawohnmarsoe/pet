// ** React Import
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
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
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert, Button, FormGroup, Label, FormText, Form, Input, FormFeedback } from 'reactstrap'


// ** Store & Actions
import { addClinic } from '../store/action'
import { useDispatch } from 'react-redux'

const ClinicAccountTab = () => {
  const SignupSchema = yup.object().shape({
    clinicName: yup.string().required(),
    status: yup.string().required(),
    serviceLocationType: yup.string().required(),
    serviceCategory: yup.string().required(),
    xcoordinate: yup.string().required(),
    ycoordinate: yup.string().required(),
    country: yup.string().required(),
    city: yup.string().required(),
    landmark: yup.string().required(),
    area: yup.string().required(),
    street: yup.string().required(),
    phone: yup.number().required(),
    workingTimes: yup.string().required()
  })

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const { register, errors, handleSubmit } = useForm({ mode: 'onChange', resolver: yupResolver(SignupSchema) })

  const onSubmit = data => {
    console.log(data)
  }

  // Categories
  const [selectCategories, setSelectCategories] = useState([])
  const categories = [
    { value: 'General Consultation', label: 'General Consultation' },
    { value: 'Vaccination', label: 'Vaccination' },
    { value: 'Internal Medicine', label: 'Internal Medicine' }
  ]
  const categoriesChange = (e) => {
    setSelectCategories(Array.isArray(e) ? e.map(x => x.value) : [])

  }
  // Locations
  const [selectLocations, setSelectLocations] = useState([])
  const locations = [
    { value: 'Home', label: 'Home' },
    { value: 'Clinic', label: 'Clinic' }
  ]
  const locationsChange = (e) => {
    setSelectLocations(Array.isArray(e) ? e.map(x => x.value) : [])

  }
  // workingTimes
  const [selectTimes, setSelectTimes] = useState([])
  const times = [
    { value: 'Sunday', label: 'Sunday', from: '10:00', to: '18:00' },
    { value: 'Monday', label: 'Monday', from: '10:00', to: '18:00' },
    { value: 'Tuesday', label: 'Tuesday', from: '10:00', to: '18:00' },
    { value: 'Wednesday', label: 'Wednesday', from: '10:00', to: '18:00' },
    { value: 'Thursday', label: 'Thursday', from: '10:00', to: '18:00' },
    { value: 'Friday', label: 'Friday', from: '10:00', to: '18:00' },
    { value: 'Saturday', label: 'Saturday', from: '10:00', to: '18:00' }
  ]
  const timesChange = (e) => {
    setSelectTimes(Array.isArray(e) ? e.map(x => x.value) : [])

  }

  // ** Function to handle form submit
  // const onSubmit = values => {
  // if (isObjEmpty(errors)) {

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

  //     console.log(values)
  //     console.log(selectCategories)
  //     console.log(selectLocations)
  //     console.log(selectTimes)
  //   }
  // }

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
                className={classnames({ 'is-invalid': errors['clinicName'] })}
              />
              {errors && errors.clinicName && <FormFeedback>{errors.clinicName.message}</FormFeedback>}
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
                    <Input
                      type='radio'
                      name='status' defaultChecked
                      className={classnames({ 'is-invalid': errors['status'] })}
                    /> Open
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type='radio'
                      name='status'
                      className={classnames({ 'is-invalid': errors['status'] })}
                    /> Close
                  </Label>
                </FormGroup>
              </div>
              {errors && errors.status && <FormFeedback>{errors.status.message}</FormFeedback>}
            </FormGroup>
          </Col>
          <Col md='4' sm='12'>
            <FormGroup>
              <Label for='serviceLocationType'>
                Service Location <span className='text-danger'>*</span>
              </Label>
              <Select
                isMulti
                id='serviceLocationType'
                name='serviceLocationType'
                value={locations.filter(obj => selectLocations.includes(obj.value))}
                options={locations}
                closeMenuOnSelect={false}
                className={classnames({ 'is-invalid': errors['serviceLocationType'] })}
                onChange={locationsChange}

              />
              {errors && errors.serviceLocationType && <FormFeedback>{errors.serviceLocationType.message}</FormFeedback>}
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
                defaultValue={selectCategories[0]}
                value={categories.filter(obj => selectCategories.includes(obj.value))}
                options={categories}
                closeMenuOnSelect={false}
                className={classnames({ 'is-invalid': errors['serviceCategory'] })}
                onChange={categoriesChange}
              />
              {errors && errors.serviceCategory && <FormFeedback>{errors.serviceCategory.message}</FormFeedback>}

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
                className={classnames({ 'is-invalid': errors['xcoordinate'] })}
              />
              {errors && errors.xcoordinate && <FormFeedback>{errors.xcoordinate.message}</FormFeedback>}

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
                className={classnames({ 'is-invalid': errors['ycoordinate'] })}
              />
              {errors && errors.ycoordinate && <FormFeedback>{errors.ycoordinate.message}</FormFeedback>}

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
                className={classnames({ 'is-invalid': errors['country'] })}
              />
              {errors && errors.country && <FormFeedback>{errors.country.message}</FormFeedback>}

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
                className={classnames({ 'is-invalid': errors['city'] })}
              />
              {errors && errors.city && <FormFeedback>{errors.city.message}</FormFeedback>}

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
                className={classnames({ 'is-invalid': errors['landmark'] })}
              />
              {errors && errors.landmark && <FormFeedback>{errors.landmark.message}</FormFeedback>}

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
                className={classnames({ 'is-invalid': errors['area'] })}
              />
              {errors && errors.area && <FormFeedback>{errors.area.message}</FormFeedback>}

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
                className={classnames({ 'is-invalid': errors['street'] })}
              />
              {errors && errors.street && <FormFeedback>{errors.street.message}</FormFeedback>}

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
                className={classnames({ 'is-invalid': errors['phone'] })}
              />
              {errors && errors.phone && <FormFeedback>{errors.phone.message}</FormFeedback>}

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
                    defaultValue={times[0]}
                    value={times.filter(obj => selectTimes.includes(obj.value))}
                    options={times}
                    closeMenuOnSelect={false}
                    className={classnames({ 'is-invalid': errors['workingTimes'] })}
                    onChange={timesChange}
                  />
                  {errors && errors.workingTimes && <FormFeedback>{errors.workingTimes.message}</FormFeedback>}

                </Col>
                <Col md='2' sm='2'>
                  <span className="ml-auto button-link" onClick={toggleWorkDays}>
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
                type="textarea"
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
