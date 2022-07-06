import { Fragment, useState, useEffect } from 'react'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import Select, { components } from 'react-select'
import { selectThemeColors } from '@utils'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form, CustomInput } from 'reactstrap'
import Flatpickr from 'react-flatpickr'


// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/avatars/avatar-blank.png'


const SettingsTabContent = ({ data }) => {

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
          <Col sm='3' md='2'>
            <FormGroup>
              <Label for='status'>Currency</Label>
              <Select
                name="status"
                options={statusOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
              />
            </FormGroup>
          </Col>
          <Col sm='3' md='2'>
            <FormGroup>
              <Label for='status'>Time Zone</Label>
              <Select
                name="status"
                options={statusOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
              />
            </FormGroup>
          </Col>
          <Col sm='3' md='2'>
            <FormGroup>
              <Label for='status'>Slot Duration</Label>
              <Select
                name="status"
                options={statusOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
              />
            </FormGroup>
          </Col>
          <Col sm='3' md='2'>
            <FormGroup>
              <Label for='status'>Online Visit Slot Duration</Label>
              <Select
                name="status"
                options={statusOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
              />
            </FormGroup>
          </Col>
          <Col sm='3' md='2'>
            <FormGroup>
              <Label for='status'>Status</Label>
              <Select
                name="status"
                options={statusOptions}
                className='react-select'
                classNamePrefix='select'
                theme={selectThemeColors}
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

export default SettingsTabContent
