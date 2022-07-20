import { Fragment, useState, useEffect } from 'react'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form, CustomInput } from 'reactstrap'
import { MapPin } from 'react-feather'
import Petzola from '../../../api/Petzola'


const BusinessTabContent = ({ data, setData }) => {

  const { register, errors, handleSubmit, control, setValue, trigger, reset } = useForm()

  // const onSubmit = data => trigger()
  const onSubmit = values => {
    const newBusinessInfo = {
      ...data,
      businessProfile: {
        addressLine1: values.addressLine1 ? values.addressLine1 : data.businessProfile.addressLine1,
        addressLine2: values.addressLine2 ? values.addressLine2 : data.businessProfile.addressLine2,
        city: values.city ? values.city : data.businessProfile.city,
        companyName: values.companyName ? values.companyName : data.businessProfile.companyName,
        companyNumber: values.companyNumber ? values.companyNumber : data.businessProfile.companyNumber,
        companyTradeLicense: values.companyTradeLicense ? values.companyTradeLicense : data.businessProfile.companyTradeLicense,
        companyType: values.companyType ? values.companyType : data.businessProfile.companyType,
        country: values.country ? values.country : data.businessProfile.country,
        currency: values.currency ? values.currency : data.businessProfile.currency,
        postCode: values.postCode ? values.postCode : data.businessProfile.postCode,
        state: values.state ? values.state : data.businessProfile.state,
        timeZone: values.timeZone ? values.timeZone : data.businessProfile.timeZone

      }
    }
    console.log(newBusinessInfo)

    const updateCustomer = async () => {
      const res = await Petzola.put('customer', { newBusinessInfo })
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
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='companyName'>Company Name</Label>

              <Controller
                control={control}
                as={Input}
                id='companyName'
                name='companyName'
                defaultValue={data.businessProfile.companyName ? data.businessProfile.companyName : ""}
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
                    defaultValue={data.businessProfile.companyNumber ? data.businessProfile.companyNumber : ""}
                    control={control}
                    as={Input}
                    name='companyNumber'
                    innerRef={register({ required: true })}
                    onChange={e => setValue('companyNumber', e.target.value)}
                    className={classnames({
                      'is-invalid': errors.companyNumber
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
                defaultValue={data.businessProfile.companyType ? data.businessProfile.companyType : "CLINIC"}
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
                defaultValue={data.businessProfile.companyTradeLicense ? data.businessProfile.companyTradeLicense : null }
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
                defaultValue={data.businessProfile.addressLine1 ? data.businessProfile.addressLine1 : ""}
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
                defaultValue={data.businessProfile.addressLine2 ? data.businessProfile.addressLine2 : ""}
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
                defaultValue={data.businessProfile.postCode ? data.businessProfile.postCode : null }
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
                defaultValue={data.businessProfile.city ? data.businessProfile.city : ""}
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
                defaultValue={data.businessProfile.state ? data.businessProfile.state : ""}
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
                defaultValue={data.businessProfile.country ? data.businessProfile.country : ""}
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
}

export default BusinessTabContent
