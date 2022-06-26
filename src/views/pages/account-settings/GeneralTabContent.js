import { Fragment, useState, useEffect } from 'react'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form } from 'reactstrap'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/avatars/avatar-blank.png'


const GeneralTabs = ({ data }) => {
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
          <Col sm='6'>
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
          <Col sm='6'>
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
          <Col sm='6'>
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
          <Col sm='6'>
            <FormGroup>
              <Label for='company'>Company</Label>
              <Controller
                defaultValue={data?.company}
                control={control}
                as={Input}
                id='company'
                name='company'
                placeholder='Company Name'
                innerRef={register({ required: true })}
                onChange={e => setValue('company', e.target.value)}
                className={classnames({
                  'is-invalid': errors.company
                })}
              />
            </FormGroup>
          </Col>
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

export default GeneralTabs
