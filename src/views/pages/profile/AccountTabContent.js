import { Fragment, useState, useEffect } from 'react'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import Select, { components } from 'react-select'
import { selectThemeColors } from '@utils'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form, CustomInput } from 'reactstrap'
import Flatpickr from 'react-flatpickr'


// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/avatars/avatar-blank.png'


const AccountTabContent = ({ data }) => {

  const { register, errors, handleSubmit, control, setValue, trigger, reset } = useForm()

  const [avatar, setAvatar] = useState(data?.img ? data?.img : defaultAvatar)

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

  // Fake Data (Later will replace with data from API)
  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' }
  ]
  const roleOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'basic', label: 'Basic' }
  ]
  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'french', label: 'French' }
  ]
  const [picker, setPicker] = useState(new Date())

  return (
    <Fragment>
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
      <Form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='firstname'>Firstname</Label>
              <Controller
                defaultValue={data?.firstname}
                control={control}
                as={Input}
                id='firstname'
                name='firstname'
                placeholder='firstname'
                innerRef={register({ required: true })}
                onChange={e => setValue('firstname', e.target.value)}
                className={classnames({
                  'is-invalid': errors.firstname
                })}
              />
            </FormGroup>
          </Col>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='lastname'>Lastname</Label>
              <Controller
                defaultValue={data?.lastname}
                control={control}
                as={Input}
                id='lastname'
                name='lastname'
                placeholder='lastname'
                innerRef={register({ required: true })}
                onChange={e => setValue('lastname', e.target.value)}
                className={classnames({
                  'is-invalid': errors.lastname
                })}
              />
            </FormGroup>
          </Col>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='email'>E-mail</Label>
              <Controller
                defaultValue={data?.email}
                control={control}
                as={Input}
                type='email'
                id='email'
                name='email'
                placeholder='Email'
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
              <Select
                id='status'
                name="status"
                options={statusOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
              />
            </FormGroup>
          </Col>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='role'>Role</Label>
              <Select
                id='role'
                name="role"
                options={roleOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
              />
            </FormGroup>
          </Col>
        </Row>

        <h4 className="card-title mt-5">Personal Information</h4 >

        <Row>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='default-picker'>Birth Date</Label>
              <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
            </FormGroup>
          </Col>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='firstname'>Mobile</Label>
              <Controller
                defaultValue="default"
                control={control}
                as={Input}
                name='firstname'
                placeholder='Mobile'
                innerRef={register({ required: true })}
                onChange={e => setValue('firstname', e.target.value)}
                className={classnames({
                  'is-invalid': errors.firstname
                })}
              />
            </FormGroup>
          </Col>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='firstname'>Website</Label>
              <Controller
                defaultValue="default"
                control={control}
                as={Input}
                name='firstname'
                placeholder='Website'
                innerRef={register({ required: true })}
                onChange={e => setValue('firstname', e.target.value)}
                className={classnames({
                  'is-invalid': errors.firstname
                })}
              />
            </FormGroup>
          </Col>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='language'>Language</Label>
              <Select
                name="language"
                options={languageOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
              />
            </FormGroup>
          </Col>
          <Col sm='6' md='4' className="petzola">
            <FormGroup>
              <Label for='gender'>Gender</Label>
              <div className='demo-inline-spacing'>
                <CustomInput type='radio' label='Male' name='gender' id='male' />
                <CustomInput type='radio' label='Female' name='gender' id='female' />
              </div>
            </FormGroup>
          </Col>

          <Col sm='6' md='4' className="petzola">
            <FormGroup>
              <Label for='contactOpt'>Contact Options</Label>
              <div className='demo-inline-spacing'>
                <CustomInput type='checkbox' label='Email' name='contactOpt' id='contactEmail' />
                <CustomInput type='checkbox' label='Message' name='contactOpt' id='contactMessage' />
                <CustomInput type='checkbox' label='Phone' name='contactOpt' id='contactPhone' />
              </div>
            </FormGroup>
          </Col>

        </Row>

        <h4 className="card-title mt-5">Identity Information</h4 >
        <Row>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='identityId'>Identity ID</Label>
              <Controller
                defaultValue='default'
                control={control}
                as={Input}
                name='identityId'
                placeholder='Identity ID'
                innerRef={register({ required: true })}
              />
            </FormGroup>
          </Col>

          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='expiry-picker'>Expiry Date</Label>
              <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='expiry-picker' />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          {(!data?.verified) && <Col className='mt-75' sm='12'>
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
    </Fragment>
  )
}

export default AccountTabContent
