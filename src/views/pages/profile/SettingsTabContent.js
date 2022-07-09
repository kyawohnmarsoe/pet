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

const SettingsTabContent = ({ data, setData }) => {

  const { register, errors, handleSubmit, control, setValue, trigger, reset } = useForm()

  const onSubmit = data => trigger()

  useEffect(() => {
    reset()
  }, [reset])

  return (
    <Fragment>

      <Form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm='3' md='2'>
            <FormGroup>
              <Label for='currency'>Currency</Label>
              <Controller
                as={Input}
                type='select'
                name='currency'
                id='currency'
                control={control}
                defaultValue={data?.businessProfile.currency}
                invalid={data !== null && (data.businessProfile.currency === undefined || data.businessProfile.currency === null)}
              >
                <option value='AED'>AED</option>
                <option value='USD'>USD</option>
                <option value='SGD'>SGD</option>

              </Controller>
            </FormGroup>
          </Col>
          <Col sm='3' md='2'>
            <FormGroup>
              <Label for='timeZone'>Time Zone</Label>
              <Controller
                as={Input}
                type='select'
                name='timeZone'
                id='timeZone'
                control={control}
                defaultValue={data?.businessProfile.timeZone}
                invalid={data !== null && (data.businessProfile.timeZone === undefined || data.businessProfile.timeZone === null)}
              >
                <option value='Dubai'>Dubai</option>
                <option value='US'>US</option>
                <option value='Asia'>Asia</option>

              </Controller>
            </FormGroup>
          </Col>
          <Col sm='3' md='2'>
            <FormGroup>
              <Label for='timeZone'>Slot Duration</Label>
              <Controller
                as={Input}
                type='select'
                name='timeZone'
                id='timeZone1'
                control={control}
                defaultValue={data?.businessProfile.timeZone}
                invalid={data !== null && (data.businessProfile.timeZone === undefined || data.businessProfile.timeZone === null)}
              >
                <option value='10 Minitues'>10 Minitues</option>
                <option value='20 Minitues'>20 Minitues</option>
                <option value='30 Minitues'>30 Minitues</option>

              </Controller>
            </FormGroup>
          </Col>
          <Col sm='3' md='3'>
            <FormGroup>
              <Label for='timeZone'>Online Visit Slot Duration</Label>
              <Controller
                as={Input}
                type='select'
                name='timeZone'
                id='timeZone2'
                control={control}
                defaultValue={data?.businessProfile.timeZone}
                invalid={data !== null && (data.businessProfile.timeZone === undefined || data.businessProfile.timeZone === null)}
              >
                <option value='10 Minitues'>10 Minitues</option>
                <option value='20 Minitues'>20 Minitues</option>
                <option value='30 Minitues'>30 Minitues</option>

              </Controller>
            </FormGroup>
          </Col>
          <Col sm='3' md='3'>
            <FormGroup>
              <Label for='timeZone'>Home Visit Slot Duration</Label>
              <Controller
                as={Input}
                type='select'
                name='timeZone'
                id='timeZone3'
                control={control}
                defaultValue={data?.businessProfile.timeZone}
                invalid={data !== null && (data.businessProfile.timeZone === undefined || data.businessProfile.timeZone === null)}
              >
                <option value='10 Minitues'>10 Minitues</option>
                <option value='20 Minitues'>20 Minitues</option>
                <option value='30 Minitues'>30 Minitues</option>

              </Controller>
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
