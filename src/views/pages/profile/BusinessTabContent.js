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

const BusinessTabContent = ({ data, setData }) => {

  const { register, errors, handleSubmit, control, setValue, trigger, reset } = useForm()

  const onSubmit = data => trigger()

  useEffect(() => {
    reset()
  }, [reset])

  return (
    <Fragment>

      <Form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='companyName'>Company Name</Label>

              <Controller
                defaultValue={data?.businessProfile.companyName}
                control={control}
                as={Input}
                id='companyName'
                name='companyName'
                innerRef={register({ required: true })}
                onChange={e => setValue('companyName', e.target.value)}
                className={classnames({
                  'is-invalid': errors.companyName
                })}
              />
            </FormGroup>
          </Col>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='companyNumber'>Phone</Label>
              <Controller
                as={Cleave}
                control={control}
                id='companyNumber'
                name='companyNumber'
                defaultValue={data?.businessProfile.companyNumber}
                placeholder='1 234 567 8900'
                options={{ phone: true, phoneRegionCode: 'US' }}
                className={classnames('form-control', {
                  'is-invalid': data !== null && (data?.businessProfile.companyNumber === undefined || data?.businessProfile.companyNumber === null)
                })}
              />
            </FormGroup>
          </Col>

          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='companyType'>Business Type</Label>
              <Controller
                as={Input}
                type='select'
                name='companyType'
                id='companyType'
                control={control}
                defaultValue={data?.businessProfile.companyType}
                invalid={data !== null && (data.businessProfile.companyType === undefined || data.businessProfile.companyType === null)}
              >
                <option value='CLINIC'>CLINIC</option>
                <option value='STORE'>STORE</option>
                <option value='SPA'>SPA</option>

              </Controller>
            </FormGroup>
          </Col>

          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='companyTradeLicense'>License Number</Label>
              <Controller
                defaultValue={data.businessProfile.companyTradeLicense}
                control={control}
                as={Input}
                id='companyTradeLicense'
                name='companyTradeLicense'
                innerRef={register({ required: true })}
                onChange={e => setValue('companyTradeLicense', e.target.value)}
                className={classnames({
                  'is-invalid': errors.companyTradeLicense
                })}
              />
            </FormGroup>
          </Col>

        </Row>

        <Row>
          <Col sm='12'>
            <h4 className='mb-1 mt-2'>
              <MapPin size={20} className='mr-50' />
              <span className='align-middle'>Address</span>
            </h4>
          </Col>
          <Col lg='4' md='6'>
            <FormGroup>
              <Label for='addressLine1'>Address Line 1</Label>
              <Controller
                defaultValue={data?.businessProfile.addressLine1}
                control={control}
                as={Input}
                id='addressLine1'
                name='addressLine1'
                innerRef={register({ required: true })}
                onChange={e => setValue('addressLine1', e.target.value)}
                className={classnames({
                  'is-invalid': errors.addressLine1
                })}
              />
            </FormGroup>
          </Col>
          <Col lg='4' md='6'>
            <FormGroup>
              <Label for='addressLine2'>Address Line 2</Label>
              <Controller
                defaultValue={data?.businessProfile.addressLine2}
                control={control}
                as={Input}
                id='addressLine2'
                name='addressLine2'
                innerRef={register({ required: true })}
                onChange={e => setValue('addressLine2', e.target.value)}
                className={classnames({
                  'is-invalid': errors.addressLine2
                })}
              />
            </FormGroup>
          </Col>
          <Col lg='4' md='6'>
            <FormGroup>
              <Label for='postcode'>Postcode</Label>
              <Controller
                defaultValue={data?.businessProfile.postCode}
                control={control}
                as={Input}
                id='postCode'
                name='postCode'
                innerRef={register({ required: true })}
                onChange={e => setValue('postCode', e.target.value)}
                className={classnames({
                  'is-invalid': errors.postCode
                })}
              />
            </FormGroup>
          </Col>
          <Col lg='4' md='6'>
            <FormGroup>
              <Label for='city'>City</Label>
              <Controller
                defaultValue={data?.businessProfile.city}
                control={control}
                as={Input}
                id='city'
                name='city'
                innerRef={register({ required: true })}
                onChange={e => setValue('city', e.target.value)}
                className={classnames({
                  'is-invalid': errors.city
                })}
              />
            </FormGroup>
          </Col>
          <Col lg='4' md='6'>
            <FormGroup>
              <Label for='state'>State</Label>
              <Controller
                defaultValue={data?.businessProfile.state}
                control={control}
                as={Input}
                id='state'
                name='state'
                innerRef={register({ required: true })}
                onChange={e => setValue('state', e.target.value)}
                className={classnames({
                  'is-invalid': errors.state
                })}
              />
            </FormGroup>
          </Col>
          <Col lg='4' md='6'>
            <FormGroup>
              <Label for='country'>Country</Label>
              <Controller
                defaultValue={data?.businessProfile.country}
                control={control}
                as={Input}
                id='country'
                name='country'
                innerRef={register({ required: true })}
                onChange={e => setValue('country', e.target.value)}
                className={classnames({
                  'is-invalid': errors.country
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
