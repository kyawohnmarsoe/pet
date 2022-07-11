import { Fragment, useState, useEffect } from 'react'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import Select, { components } from 'react-select'
import { selectThemeColors } from '@utils'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form, CustomInput } from 'reactstrap'
import Flatpickr from 'react-flatpickr'
import { User, MapPin } from 'react-feather'
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/avatars/avatar-blank.png'

const AccountTabContent = ({ data, setData }) => {

  // ** State
  const [avatar, setAvatar] = useState(data?.accountInformation.img ? data?.accountInformation.img : defaultAvatar)

  // ** React hook form vars
  const { register, errors, handleSubmit, control, setValue, trigger, reset } = useForm()

  // ** Function to change user image
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const onSubmit = data => trigger()

  useEffect(() => {
    reset()
  }, [reset])

  // if (data === null || data === undefined) {
  //   return null
  // } else {
  return (
    <Row>
      <Col sm='12'>
        <Media>
          <Media className='mr-25' left>
            <Media object className='rounded mr-50' src={avatar} alt='Generic placeholder image' height='80' width='80' />
          </Media>
          <Media className='mt-75 ml-1' body>
            <Button.Ripple tag={Label} className='mr-75' size='sm' color='primary'>
              Upload
              <Input type='file' onChange={onChange} hidden accept='image/*' />
            </Button.Ripple>
            <Button.Ripple color='secondary' size='sm' outline onClick={() => { reset({ ...data }) }}>
              Reset
            </Button.Ripple>
            <p>Allowed JPG, GIF or PNG. Max size of 800kB</p>
          </Media>
        </Media>
      </Col>

      <Col sm='12' className='mt-2'>
        <Form onSubmit={handleSubmit(data => {
          trigger()
          setData(data)
        })}>
          <Row>
            <Col sm='6' md='4'>
              <FormGroup>
                <Label for='firstName'>First Name</Label>
                <Controller
                  defaultValue={data?.accountInformation.firstName}
                  control={control}
                  as={Input}
                  name='firstName'
                  innerRef={register({ required: true })}
                  onChange={e => setValue('firstName', e.target.value)}
                  className={classnames({
                    'is-invalid': errors.firstName
                  })}
                />
              </FormGroup>
            </Col>
            <Col sm='6' md='4'>
              <FormGroup>
                <Label for='lastName'>Last Name</Label>
                <Controller
                  defaultValue={data?.accountInformation.lastName}
                  control={control}
                  as={Input}
                  name='lastName'
                  innerRef={register({ required: true })}
                  onChange={e => setValue('lastName', e.target.value)}
                  className={classnames({
                    'is-invalid': errors.lastName
                  })}
                />
              </FormGroup>
            </Col>
            <Col sm='6' md='4'>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Controller
                  defaultValue={data?.accountInformation.email}
                  control={control}
                  as={Input}
                  type='email'
                  name='email'
                  disabled
                  innerRef={register({ required: true })}
                  onChange={e => setValue('email', e.target.value)}
                  className={classnames({
                    'is-invalid': errors.email
                  })}
                />
              </FormGroup>
            </Col>
            <Col sm='6' md='4'>
              <FormGroup>
                <Label for='status'>Status</Label>
                <Controller
                  as={Input}
                  type='select'
                  name='status'
                  control={control}
                  defaultValue={data?.accountInformation.status}
                  invalid={data !== null && (data.accountInformation.status === undefined || data.accountInformation.status === null)}
                >
                  <option value='Active'>Active</option>
                  <option value='Inactive'>Inactive</option>
                </Controller>
              </FormGroup>
            </Col>
            <Col sm='6' md='4'>
              <FormGroup>
                <Label for='role'>Role</Label>
                <Controller
                  as={Input}
                  type='select'
                  name='userRoleId'
                  control={control}
                  defaultValue={data?.accountInformation.userRoleId}
                  invalid={data !== null && (data.accountInformation.userRoleId === undefined || data.accountInformation.userRoleId === null)}
                >
                  <option value='ADMIN'>ADMIN</option>
                  <option value='BASIC'>BASIC</option>
                </Controller>

              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col sm='12'>
              <h4 className='mb-1 mt-2'>
                <User size={20} className='mr-50' />
                <span className='align-middle'>Personal Information</span>
              </h4>
            </Col>

            <Col sm='6' md='4'>
              <FormGroup>
                <Label className='d-block' for='dateofBirth'>
                  Birth Date
                </Label>
                <Controller
                  defaultValue={data?.accountInformation.dateofBirth}
                  name='dateofBirth'
                  as={Flatpickr}
                  control={control}
                  placeholder='YYYY-MM-DD'
                  options={{ dateFormat: 'Y-m-d' }}
                  className={classnames('form-control', {
                    'is-invalid': errors.dateofBirth
                  })}
                />

              </FormGroup>
            </Col>
            <Col sm='6' md='4'>
              <FormGroup>
                <Label for='mobileNumber'>Mobile</Label>
                <Controller
                  as={Cleave}
                  control={control}
                  name='mobileNumber'
                  defaultValue={data?.accountInformation.mobileNumber}
                  placeholder='1 234 567 8900'
                  options={{ phone: true, phoneRegionCode: 'US' }}
                  className={classnames('form-control', {
                    'is-invalid': data !== null && (data.accountInformation.mobileNumber === undefined || data.accountInformation.mobileNumber === null)
                  })}
                />

              </FormGroup>
            </Col>
            <Col sm='6' md='4'>
              <FormGroup>
                <Label for='websiteURL'>Website</Label>
                <Input
                  type='url'
                  name='websiteURL'
                  placeholder='https://google.com'
                  defaultValue={data?.accountInformation.websiteURL}
                />
              </FormGroup>
            </Col>
            <Col sm='6' md='4'>
              <FormGroup>
                <Label for='languages'>Languages</Label>
                <Controller
                  as={Input}
                  type='select'
                  name='primaryLanguage'
                  control={control}
                  defaultValue={data?.accountInformation.primaryLanguage}
                  invalid={data !== null && (data.accountInformation.primaryLanguage === undefined || data.accountInformation.primaryLanguage === null)}
                >
                  <option value='English'>English</option>
                  <option value='Spanish'>Spanish</option>
                  <option value='French'>French</option>
                  <option value='Russian'>Russian</option>
                  <option value='German'>German</option>
                  <option value='Arabic'>Arabic</option>
                  <option value='Sanskrit'>Sanskrit</option>
                </Controller>
              </FormGroup>
            </Col>
            <Col sm='6' md='4' className="petzola">
              <FormGroup>
                <label className='d-block mb-1'>Gender</label>
                <FormGroup>
                  <Controller
                    defaultValue={data?.accountInformation.gender}
                    name='gender'
                    control={control}
                    render={props => {
                      return (
                        <CustomInput
                          inline
                          type='radio'
                          label='Male'
                          value='Male'
                          id='gender-male'
                          name={props.name}
                          invalid={data !== null && (data.accountInformation.gender === undefined || data.accountInformation.gender === null)}
                          onChange={() => setValue('gender', 'male')}
                        />
                      )
                    }}
                  />
                  <Controller
                    name='gender'
                    control={control}
                    render={props => {
                      return (
                        <CustomInput
                          inline
                          type='radio'
                          label='Female'
                          value='Female'
                          id='gender-female'
                          name={props.name}
                          invalid={data !== null && (data.accountInformation.gender === undefined || data.accountInformation.gender === null)}
                          onChange={() => setValue('gender', 'female')}
                        />
                      )
                    }}
                  />
                </FormGroup>
              </FormGroup>
            </Col>

            <Col sm='6' md='4' className="petzola">
              <FormGroup>
                <label className='d-block mb-1'>Contact Options</label>
                <FormGroup>
                  <CustomInput
                    inline
                    type='checkbox'
                    name='preferedContactOptions'
                    id='emailTerms'
                    value='Email'
                    label='Email'

                  />
                  <CustomInput
                    inline
                    type='checkbox'
                    name='preferedContactOptions'
                    id='msgTerms'
                    value='Messages'
                    label='Messages'

                  />
                  <CustomInput inline type='checkbox' name='preferedContactOptions' id='phoneTerms' value='Phone' label='Phone' />
                </FormGroup>
              </FormGroup>
            </Col>

          </Row>


          <Row>
            <Col sm='12'>
              <h4 className='mb-1 mt-2'>
                <User size={20} className='mr-50' />
                <span className='align-middle'>Identity Information</span>
              </h4>
            </Col>
            <Col sm='6' md='4'>
              <FormGroup>
                <Label for='identityNumber'>Identity ID</Label>
                <Controller
                  defaultValue={data?.accountInformation.identityNumber}
                  control={control}
                  as={Input}
                  name='identityNumber'
                  innerRef={register({ required: true })}
                />
              </FormGroup>
            </Col>

            <Col sm='6' md='4'>
              <FormGroup>
                <Label className='d-block' for='identityExpirydate'>
                  Expiry Date
                </Label>
                <Controller
                  defaultValue={data?.accountInformation.identityExpirydate}
                  id='identityExpirydate'
                  name='identityExpirydate'
                  as={Flatpickr}
                  control={control}
                  placeholder='YYYY-MM-DD'
                  options={{ dateFormat: 'Y-m-d' }}
                  className={classnames('form-control', {
                    'is-invalid': errors.identityExpirydate
                  })}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            {(!data?.accountInformation.isEmailVerified) && <Col className='mt-75' sm='12'>
              <Alert className='mb-50' color='warning'>
                <h4 className='alert-heading'>Your email is not confirmed. Please check your inbox.</h4>
                <div className='alert-body'>
                  <a href='/' className='alert-link' onClick={e => e.preventDefault()}>
                    Resend confirmation
                  </a>
                </div>
              </Alert>
            </Col>}
            <Col className='mt-2' sm='12'>
              <Button.Ripple type='submit' className='mr-1' color='primary'>
                Save changes
              </Button.Ripple>
              <Button.Ripple color='secondary' outline>
                Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}

export default AccountTabContent
