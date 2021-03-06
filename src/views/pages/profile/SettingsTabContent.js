import { Fragment, useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button, Media, Label, Row, Col, Input, FormGroup, Form } from 'reactstrap'
import 'cleave.js/dist/addons/cleave-phone.us'
import Petzola from '../../../api/Petzola'


const SettingsTabContent = ({ data, setData }) => {

  const { register, errors, handleSubmit, control, setValue, trigger, reset } = useForm()

  // const onSubmit = data => trigger()
  const onSubmit = values => {
    const newSettingInfo = {
      ...data,
      businessProfile: {
        ...data.businessProfile,
        country: values.country ? values.country : data.businessProfile.country,
        currency: values.currency ? values.currency : data.businessProfile.currency,
        timeZone: values.timeZone ? values.timeZone : data.businessProfile.timeZone
      }
    }
    console.log(newSettingInfo)
    const updateCustomer = async () => {
      const res = await Petzola.put('customer', { newSettingInfo })
      console.log(res)
    }
    
    updateCustomer()
  }

  useEffect(() => {
    reset()
  }, [reset])

  // console.log(data)
  
  if (data === null || data === undefined) {
    return null
  } else {
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
                defaultValue={(data.businessProfile.currency === null || data.businessProfile.currency === undefined) ? "AED" : data.businessProfile.currency}
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
                defaultValue={(data.businessProfile.timeZone === null || data.businessProfile.timeZone === undefined) ? "Dubai" : data.businessProfile.timeZone}
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
                defaultValue={(data.businessProfile.timeZone === null || data.businessProfile.timeZone === undefined) ? "10 Minitues" : data.businessProfile.timeZone}
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
                defaultValue={(data.businessProfile.timeZone === null || data.businessProfile.timeZone === undefined) ? "10 Minitues" : data.businessProfile.timeZone}
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
                defaultValue={(data.businessProfile.timeZone === null || data.businessProfile.timeZone === undefined) ? "10 Minitues" : data.businessProfile.timeZone}
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
}

export default SettingsTabContent
