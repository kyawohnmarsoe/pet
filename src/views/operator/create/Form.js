// ** React Import
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

// ** Utils
import { isObjEmpty } from '@utils'
import Select from 'react-select'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import {Table, Card, CustomInput, CardHeader, CardTitle, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert, Button, FormGroup, Label, FormText, Form, Input, FormFeedback } from 'reactstrap'

// ** Store & Actions
// import { addClinic } from '../store/action'
// import { useDispatch } from 'react-redux'

const CreateOperatorForm = () => {
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
  // const dispatch = useDispatch()

  // ** Vars
  const { register, errors, handleSubmit } = useForm({ mode: 'onChange', resolver: yupResolver(SignupSchema) })

  const onSubmit = data => {
    console.log(data)
  }

  // Clinics
  const [selectClinics, setSelectClinics] = useState([])
  const clinics = [
    { value: 'Clinic A', label: 'Clinic A' },
    { value: 'Clinic B', label: 'Clinic B' },
    { value: 'Clinic C', label: 'Clinic C' }
  ]

  const clinicsChange = (e) => {
    setSelectClinics(Array.isArray(e) ? e.map(x => x.value) : [])

  }


  // ProfessionalTitle
  const title = [
    { name: 'Mr.'},
    { value: 'Mrs.', label: 'Mrs.'},
    { value: 'Ms.', label: 'Ms.'},
    { value: 'Prof.', label: 'Prof.'},
    { value: 'Dr.', label: 'Dr.'}
  ]

  // Status
  const status = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' }
  ]

  // Status
  const clinicsList = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' }
  ]

  // OperatorRole
  const [selectAssignedRoles, setSelectAssignedRoles] = useState([])
  const assignedRoles = [
    { value: 'VET', label: 'VET'},
    { value: 'Receptionist', label: 'Receptionist'},
    { value: 'Nurse', label: 'Nurse'},
    { value: 'Groomer', label: 'Groomer'}
  ]
  const assignedRolesChange = (e) => {
    setSelectAssignedRoles(Array.isArray(e) ? e.map(x => x.value) : [])
  }

    // SpokenLan
    const [selectSpokenLanguage, setSelectSpokenLanguage] = useState([])
    const spokenLanguage = [
      { value: 'english', label: 'english'},
      { value: 'Arabic', label: 'Arabic'},
      { value: 'French', label: 'French'},
      { value: 'Urdu', label: 'Urdu'}
    ]
    const spokenLanguageChange = (e) => {
      setSelectSpokenLanguage(Array.isArray(e) ? e.map(x => x.value) : [])
    }
  

  return (
    <>
      <Form>
        <Card> 
          <CardHeader>
                    <CardTitle tag='h4'>Account Details</CardTitle>
          </CardHeader>

          <CardBody className='pt-2'>
                <Row>
                  <Col md='12' sm='12'>
                    <FormGroup>
                      <Label for='photo'>
                        Profile Photo<span className='text-danger'>*</span>
                      </Label>
                      <Input
                        type="file"
                        name='photo'
                        id='photo'
                        className={classnames({ 'is-invalid': errors['photo'] })}
                      />
                      {errors && errors.firstName && <FormFeedback>{errors.firstName.message}</FormFeedback>}
                    </FormGroup>
                  </Col>
                  <Col md='4' sm='12'>
                    <FormGroup>
                      <Label for='professionalTitle'>
                        Professional Title <span className='text-danger'>*</span>
                      </Label>
                      <Select
                        className='react-select'
                        classNamePrefix='select'
                        defaultValue={title[0]}
                        options={title}
                        isClearable={false}
                        name="professionalTitle"
                      />
                      {errors && errors.workingTimes && <FormFeedback>{errors.professionalTitle.message}</FormFeedback>}

                    </FormGroup>
                  </Col>
                  <Col md='4' sm='12'>
                    <FormGroup>
                      <Label for='FirstName'>
                        Frist Name <span className='text-danger'>*</span>
                      </Label>
                      <Input
                        name='firstName'
                        id='firstName'
                        className={classnames({ 'is-invalid': errors['firstName'] })}
                      />
                      {errors && errors.firstName && <FormFeedback>{errors.firstName.message}</FormFeedback>}
                    </FormGroup>
                  </Col>
                  <Col md='4' sm='12'>
                    <FormGroup>
                      <Label for='lastName'>
                        Last Name <span className='text-danger'>*</span>
                      </Label>
                      <Input
                        name='lastName'
                        id='lastName'
                        className={classnames({ 'is-invalid': errors['firstName'] })}
                      />
                      {errors && errors.firstName && <FormFeedback>{errors.firstName.message}</FormFeedback>}
                    </FormGroup>
                  </Col>
                  <Col md='4' sm='12'>
                    <FormGroup>
                      <Label for='FullArabicName'>
                        Full Arabic Name <span className='text-danger'>*</span>
                      </Label>
                      <Input
                        name='FullArabicName'
                        id='FullArabicName'
                        className={classnames({ 'is-invalid': errors['FullArabicName'] })}
                      />
                      {errors && errors.FullArabicName && <FormFeedback>{errors.FullArabicName.message}</FormFeedback>}
                    </FormGroup>
                  </Col>
                  <Col md='4' sm='12'>
                    <FormGroup>
                      <Label for='email'>
                      Staff Email Address <span className='text-danger'>*</span>
                      </Label>
                      <Input
                        type="email"
                        name='email'
                        id='email'
                        className={classnames({ 'is-invalid': errors['email'] })}
                      />
                      {errors && errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
                    </FormGroup>
                  </Col>
                  <Col md='4' sm='12'>
                    <FormGroup>
                      <Label for='mobileNumber'>
                      Staff Mobile Number <span className='text-danger'>*</span>
                      </Label>
                      <Input
                        
                        name='mobileNumber'
                        id='mobileNumber'
                        className={classnames({ 'is-invalid': errors['mobileNumber'] })}
                      />
                      {errors && errors.mobileNumber && <FormFeedback>{errors.mobileNumber.message}</FormFeedback>}
                    </FormGroup>
                  </Col>
                  <Col md='4' sm='12'>
                    <Label for='gender'>
                      Gender <span className='text-danger'>*</span>
                    </Label>
                    <div style={{ marginTop: '0.4rem' }}>
                      <FormGroup check inline>
                        <Label check>
                          <Input type='radio' name='gender' value="MALE" defaultChecked /> Male
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type='radio' name='gender' value="FEMALE" /> Female
                        </Label>
                      </FormGroup>
                    </div>
                  </Col>

                  <Col md='4' sm='12'>
                      <FormGroup>
                        <Label for='assignedRoles'>
                         Operator Role <span className='text-danger'>*</span>
                        </Label>
                        <Select
                          isMulti
                          id='assignedRoles'
                          name='assignedRoles'
                          value={assignedRoles.filter(obj => selectAssignedRoles.includes(obj.value))}
                          options={assignedRoles}
                          closeMenuOnSelect={false}
                          className={classnames({ 'is-invalid': errors['assignedRoles'] })}
                          onChange={assignedRolesChange}

                        />
                        {errors && errors.assignedRoles && <FormFeedback>{errors.assignedRoles.message}</FormFeedback>}
                      </FormGroup>
                  </Col>

                  <Col md='4' sm='12'>
                      <FormGroup>
                        <Label for='spokenLanguage'>
                         Spoken Languages <span className='text-danger'>*</span>
                        </Label>
                        <Select
                          isMulti
                          id='spokenLanguage'
                          name='spokenLanguage'
                          value={spokenLanguage.filter(obj => selectSpokenLanguage.includes(obj.value))}
                          options={spokenLanguage}
                          closeMenuOnSelect={false}
                          className={classnames({ 'is-invalid': errors['spokenLanguage'] })}
                          onChange={spokenLanguageChange}

                        />
                        {errors && errors.spokenLanguage && <FormFeedback>{errors.spokenLanguage.message}</FormFeedback>}
                      </FormGroup>
                  </Col>
                  <Col md='4' sm='12'>
                    <FormGroup>
                        <Label for='status'>
                            Status <span className='text-danger'>*</span>
                        </Label>
                        <Select
                          className='react-select'
                          classNamePrefix='select'
                          defaultValue={status[1]}
                          options={status}
                          isClearable={false}
                        />
                    </FormGroup>
                  </Col>
                </Row>

          </CardBody>
        </Card>

        <Card> 
          <CardHeader>
                    <CardTitle tag='h4'>Clinic Settings</CardTitle>
          </CardHeader>

          <CardBody className='pt-2'>
                <Row>
                  
                <Col md='4' sm='12'>
                      <FormGroup>
                        <Label for='clinics'>
                          Clinics <span className='text-danger'>*</span>
                        </Label>
                        <Select
                          isMulti
                          id='clinics'
                          name='clinics'
                          value={clinics.filter(obj => selectClinics.includes(obj.value))}
                          options={clinics}
                          closeMenuOnSelect={false}
                          className={classnames({ 'is-invalid': errors['clinics'] })}
                          onChange={clinicsChange}

                        />
                        {errors && errors.clinics && <FormFeedback>{errors.clinics.message}</FormFeedback>}
                      </FormGroup>
                  </Col>
                  <Col md='4' sm='12'>
                    <FormGroup>
                      <Label for='meetingId'>
                      Online Meeting ID <span className='text-danger'>*</span>
                      </Label>
                      <Input
                        name='meetingId'
                        id='meetingId'
                        placeHolder='Zoom Meeting Link'
                        className={classnames({ 'is-invalid': errors['meetingId'] })}
                      />
                      {errors && errors.meetingId && <FormFeedback>{errors.meetingId.message}</FormFeedback>}
                      
                    </FormGroup>
                  </Col>
               
                  <Col md='4' sm='12'>
                      <FormGroup>
                        <Label for='onlineMeeting'  style={{ marginBottom: '10px' }}>
                         Online Meeting 
                        </Label>
                        <CustomInput type='switch' label={<Label />} id='onlineMeetting' name='onlineMeeting' />
                       </FormGroup>
                  </Col>

                  <Col md='4' sm='12'>
                      <FormGroup>
                        <Label for='homeVisit'  style={{ marginBottom: '10px' }}>
                          Home Visit 
                        </Label>
                        <CustomInput  type='switch' label={<Label />} id='homeVisit' name='homeVisit' />
                      </FormGroup>
                  </Col>
                
                </Row>
          </CardBody>
        </Card>

      <div className='text-right mt-2 mb-'>
        <Button type='submit' className='mr-1' color='primary'>
                  Submit
                </Button>
                <Button type='reset' color='secondary' outline >
                  Cancel
                </Button>
      </div>
      </Form>
    </>
  )
}

export default CreateOperatorForm
