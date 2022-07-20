import { Fragment, useState, useEffect } from 'react'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form, CustomInput } from 'reactstrap'
import 'cleave.js/dist/addons/cleave-phone.us'
import Petzola from '../../../api/Petzola'


const PayoutsTabContent = ({ data, setData }) => {
  const { register, errors, handleSubmit, control, setValue, trigger, reset } = useForm()

  // const onSubmit = data => trigger()

  const onSubmit = values => {
    const newBankInfo = {
      ...data,
      bankAccountInformation: {
        accountHolderName: values.accountHolderName ? values.accountHolderName : data.bankAccountInformation.accountHolderName,
        accountNumber: values.accountNumber ? values.accountNumber : data.bankAccountInformation.accountNumber,
        bankName: values.bankName ? values.bankName : data.bankAccountInformation.bankName,
        createdByUserID: values.createdByUserID ? values.createdByUserID : data.bankAccountInformation.createdByUserID,
        createdByUserName: values.createdByUserName ? values.createdByUserName : data.bankAccountInformation.createdByUserName,
        creationDate: values.creationDate ? values.creationDate : data.bankAccountInformation.creationDate,
        iBAN: values.iBAN ? values.iBAN : data.bankAccountInformation.iBAN,
        modificationDate: values.modificationDate ? values.modificationDate : data.bankAccountInformation.modificationDate,
        petzolaCommisionPercent: values.petzolaCommisionPercent ? values.petzolaCommisionPercent : data.bankAccountInformation.petzolaCommisionPercent,
        stripeAccountCreationDate: values.stripeAccountCreationDate ? values.stripeAccountCreationDate : data.bankAccountInformation.stripeAccountCreationDate,
        stripeCustomerAccoundID: values.stripeCustomerAccoundID ? values.stripeCustomerAccoundID : data.bankAccountInformation.stripeCustomerAccoundID
      }
    }
    console.log(newBankInfo)
    const updateCustomer = async () => {
      const res = await Petzola.put('customer', { newBankInfo })
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
              <Label for='accountHolderName'>Account Holder Name</Label>
              <Controller
                defaultValue={data.bankAccountInformation.accountHolderName ? data.bankAccountInformation.accountHolderName : ""}
                control={control}
                as={Input}
                name='accountHolderName'
                innerRef={register({ required: true })}
                onChange={e => setValue('accountHolderName', e.target.value)}
                className={classnames({
                  'is-invalid': errors.accountHolderName
                })}
              />
            </FormGroup>
          </Col>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='petzolaCommisionPercent'>Petzola Commision %</Label>
              <Controller
                defaultValue={data.bankAccountInformation.petzolaCommisionPercent ? data.bankAccountInformation.petzolaCommisionPercent : ""}
                control={control}
                as={Input}
                name='petzolaCommisionPercent'
                innerRef={register({ required: true })}
                onChange={e => setValue('petzolaCommisionPercent', e.target.value)}
                className={classnames({
                  'is-invalid': errors.petzolaCommisionPercent
                })}
              />
            </FormGroup>
          </Col>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='firstname'>Current Plan</Label>
              <div className='row m-0'>{data.accountInformation.subscriptionPlanId ? data.accountInformation.subscriptionPlanId : ""} - {data.accountInformation.subscriptionPlanId ? data.accountInformation.subscriptionPlanId : ""} <span className='ml-auto'><a href="#"> Change</a></span></div>
            </FormGroup>
          </Col>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='bankName'>Bank Name</Label>
              <Controller
                defaultValue={data.bankAccountInformation.bankName ? data.bankAccountInformation.bankName : ""}
                control={control}
                as={Input}
                id='bankName'
                name='bankName'
                innerRef={register({ required: true })}
                onChange={e => setValue('bankName', e.target.value)}
                className={classnames({
                  'is-invalid': errors.bankName
                })}
              />
            </FormGroup>
          </Col>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='iBAN'>IBAN</Label>
              <Controller
                defaultValue={data.bankAccountInformation.iBAN ? data.bankAccountInformation.iBAN : "" }
                control={control}
                as={Input}
                id='iBAN'
                name='iBAN'
                innerRef={register({ required: true })}
                onChange={e => setValue('iBAN', e.target.value)}
                className={classnames({
                  'is-invalid': errors.iBAN
                })}
              />
            </FormGroup>
          </Col>
          <Col sm='6' md='4'>
            <FormGroup>
              <Label for='petzolaCommisionPercent'>Petzola Commision %</Label>
              <Controller
                defaultValue={data.bankAccountInformation.petzolaCommisionPercent ? data.bankAccountInformation.petzolaCommisionPercent : ""}
                control={control}
                as={Input}
                name='petzolaCommisionPercent'
                innerRef={register({ required: true })}
                onChange={e => setValue('petzolaCommisionPercent', e.target.value)}
                className={classnames({
                  'is-invalid': errors.petzolaCommisionPercent
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

export default PayoutsTabContent
