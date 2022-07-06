import { Fragment, useState, useEffect } from 'react'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import Select, { components } from 'react-select'
import { selectThemeColors } from '@utils'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form, CustomInput } from 'reactstrap'
import Flatpickr from 'react-flatpickr'


// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/avatars/avatar-blank.png'


const BusinessTabContent = ({ data }) => {

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

      <Form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='firstname'>Company Name</Label>
              <Controller
                defaultValue='default'
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
                defaultValue='default'
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
              <Label for='email'>License Number</Label>
              <Controller
                defaultValue='default'
                control={control}
                as={Input}
                type='email'
                id='email'
                name='email'
                innerRef={register({ required: true })}
                onChange={e => setValue('email', e.target.value)}
                className={classnames({
                  'is-invalid': errors.email
                })}
              />
            </FormGroup>
          </Col>

        </Row>

        <h4 className="card-title mt-3">Address</h4 >

        <Row>

          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='firstname'>Address Line 1</Label>
              <Controller
                defaultValue='default'
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
              <Label for='firstname'>Address Line 2</Label>
              <Controller
                defaultValue='default'
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
              <Label for='firstname'>Post Code</Label>
              <Controller
                defaultValue='default'
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
              <Label for='firstname'>City</Label>
              <Controller
                defaultValue='default'
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
              <Label for='firstname'>State</Label>
              <Controller
                defaultValue='default'
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
              <Label for='firstname'>Country</Label>
              <Controller
                defaultValue='default'
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

        </Row>

        <Row>
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

export default BusinessTabContent
