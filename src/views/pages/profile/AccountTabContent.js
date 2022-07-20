import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Fragment, useState, useEffect } from 'react'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import Select, { components } from 'react-select'
import { selectThemeColors } from '@utils'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form, CustomInput, FormFeedback } from 'reactstrap'
import Flatpickr from 'react-flatpickr'
import { User, MapPin, Edit, Trash2 } from 'react-feather'
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'
import Avatar from '@components/avatar'


// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/avatars/avatar-blank.png'

const AccountTabContent = ({ data, setData }) => {

  const SignupSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required()
  })

  // ** State
  const [img, setImg] = useState(null)
  const [avatar, setAvatar] = useState(data?.accountInformation.img ? data?.accountInformation.img : defaultAvatar)

  // ** React hook form vars
  const { register, errors, handleSubmit, control, setValue, trigger, reset } = useForm({ mode: 'onChange', resolver: yupResolver(SignupSchema) })

  // ** Function to change user image
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  // const onSubmit = data => trigger()

  const onSubmit = values => {
    const newAccountInfo = {
      ...data,
      accountInformation: {
        img: values.img ? values.img : data.accountInformation.img,
        dateofBirth: values.dateofBirth ? values.dateofBirth : data.accountInformation.dateofBirth,
        email: values.email ? values.email : data.accountInformation.email,
        firstName: values.firstName ? values.firstName : data.accountInformation.firstName,
        gender: values.gender ? values.gender : data.accountInformation.gender,
        id: values.id ? values.id : data.accountInformation.id,
        identityExpirydate: values.identityExpirydate ? values.identityExpirydate : data.accountInformation.identityExpirydate,
        identityNumber: values.identityNumber ? values.identityNumber : data.accountInformation.identityNumber,
        lastName: values.lastName ? values.lastName : data.accountInformation.lastName,
        mobileNumber: values.mobileNumber ? values.mobileNumber : data.accountInformation.mobileNumber,
        preferedContactOptions: values.preferedContactOptions ? values.preferedContactOptions : data.accountInformation.preferedContactOptions,
        primaryLanguage: values.primaryLanguage ? values.primaryLanguage : data.accountInformation.primaryLanguage,
        status: values.status ? values.status : data.accountInformation.status,
        subscriptionPlanId: values.subscriptionPlanId ? values.subscriptionPlanId : data.accountInformation.subscriptionPlanId,
        userRoleId: values.userRoleId ? values.userRoleId : data.accountInformation.userRoleId,
        websiteURL: values.websiteURL ? values.websiteURL : data.accountInformation.websiteURL
      }
    }

    console.log(newAccountInfo)
  }

  useEffect(() => {
    reset()
    console.log(data)
  }, [reset])

  // ** Renders User
  const renderUserAvatar = () => {
    if (img === null) {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded mr-2 my-25'
          content={data.accountInformation.firstName}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    } else {
      return (
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer'
          src={img}
          alt='user profile avatar'
          height='90'
          width='90'
        />
      )
    }
  }

  if (data === null || data === undefined) {
    return null
  } else {
    return (
      <Row>
        <Col sm='12' className='d-none'>
          <Media className='mb-2'>
            {/* {renderUserAvatar()} */}
            <Media className='mt-50' body>
              <h4>{data.accountInformation.firstName} {data.accountInformation.lastName}</h4>
              <div className='d-flex flex-wrap mt-1 px-0'>
                <Button.Ripple id='change-img' tag={Label} className='mr-75 mb-0' color='primary'>
                  <span className='d-none d-sm-block'>Change</span>
                  <span className='d-block d-sm-none'>
                    <Edit size={14} />
                  </span>
                  <input type='file' hidden id='change-img' onChange={onChange} accept='image/*' />
                </Button.Ripple>
                <Button.Ripple color='secondary' outline>
                  <span className='d-none d-sm-block'>Remove</span>
                  <span className='d-block d-sm-none'>
                    <Trash2 size={14} />
                  </span>
                </Button.Ripple>
              </div>
            </Media>
          </Media>
        </Col>


        <Col sm='12' className='mt-2'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm='6' md='4'>
                <FormGroup>
                  <Label for='firstName'>First Name<span className='text-danger'>*</span></Label>
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
                  {errors && errors.firstName && <FormFeedback>{errors.firstName.message}</FormFeedback>}

                </FormGroup>
              </Col>
              <Col sm='6' md='4'>
                <FormGroup>
                  <Label for='lastName'>Last Name<span className='text-danger'>*</span></Label>
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
                  {errors && errors.lastName && <FormFeedback>{errors.lastName.message}</FormFeedback>}

                </FormGroup>
              </Col>
              <Col sm='6' md='4'>
                <FormGroup>
                  <Label for='email'>Email<span className='text-danger'>*</span></Label>
                  <Controller
                    defaultValue={data?.accountInformation.email}
                    value={data?.accountInformation.email}
                    control={control}
                    as={Input}
                    type='email'
                    name='email'
                    innerRef={register({ required: true })}
                    onChange={e => setValue('email', e.target.value)}
                    className={classnames({
                      'is-invalid': errors.email
                    })}
                  />
                  {errors && errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}

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
                    type='text'
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
}

export default AccountTabContent
