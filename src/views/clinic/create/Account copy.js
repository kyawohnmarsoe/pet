// ** React Imports
import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import classnames from 'classnames'

// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'
// ** Utils
import { isObjEmpty } from '@utils'
// ** Store & Actions
import { addClinic } from '../store/action'
import { useDispatch } from 'react-redux'

// ** Third Party Components
import { Lock, Edit, Trash2 } from 'react-feather'
import {
  Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, Card, CardHeader, CardTitle, CardBody,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'
import WorkDays from '../list/WorkDays'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/avatars/avatar-blank.png'
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'

const ClinicAccountTab = () => {

  // ** State
  // const [clinic, setClinic] = useState(null)
  const [img, setImg] = useState(null)
  const [clinicData, setClinicData] = useState(null)
  const [avatar, setAvatar] = useState(defaultAvatar)

  // ** Store Vars
  const dispatch = useDispatch()

  const { register, errors, handleSubmit, control, setValue, trigger, reset } = useForm()


  // ** Function to change user image
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const imgRemove = e => {
    setImg(null)
  }

  const serviceCategories = [
    { value: 'General Consultation', label: 'General Consultation' },
    { value: 'Vaccination', label: 'Vaccination' },
    { value: 'Internal Medicine', label: 'Internal Medicine' }
  ]
  const workingTimes = [
    { value: 'Saturday', label: 'Saturday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Thursday', label: 'Thursday' }
  ]
  const [formModal, setFormModal] = useState(false)

  const [workDaysOpen1, setWorkDaysOpen1] = useState(false)
  const toggleWorkDays1 = () => setWorkDaysOpen1(!workDaysOpen1)

  const onSubmit = values => {
    if (isObjEmpty(errors)) {
      // dispatch(
      //     addClinic(clinic)
      // )
      console.log({
        avatar: values.avatar,
        aboutClinic: values.aboutClinic,
        address: {
          area: values.area,
          city: values.city,
          country: values.country,
          landmark: values.landmark,
          mapLocation: {
            xcoordinate: values.xcoordinate,
            ycoordinate: values.ycoordinate
          },
          street: values.street
        },
        clinicName: values.clinicName,
        phone: values.phone,
        serviceCategory: [values.serviceCategory],
        serviceLocationType: values.serviceLocationType,
        status: values.status,
        tollFree: values.tollFree,

        workingTimes:
        {
          clinicId: 2,
          shifts: [
            {
              value: 'Saturday',
              label: 'Saturday',
              from: "",
              id: 0,
              to: ""
            },
            {
              value: 'Tuesday',
              label: 'Tuesday',
              from: "",
              id: 0,
              to: ""
            }
          ]
        }

      })
    }
  }


  // ** Renders User
  const renderClinicAvatar = () => {
    if (img === null) {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded mr-2 my-25'
          content={avatar}
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

  return (
    <Row>

      <Col sm='12'>
        <Media className='mb-2'>
          {renderClinicAvatar()}
          <Media className='mt-50' body>
            {/* <h4>{selectedClinic.clinicName} </h4> */}
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
      <Col sm='12'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='clinicName'><span className='text-danger'>*</span>Branch Name</Label>
                <Controller

                  control={control}
                  as={Input}
                  name='clinicName'
                  innerRef={register({ required: true })}
                  className={classnames({
                    'is-invalid': errors.clinicName
                  })}

                />
              </FormGroup>
            </Col>

            <Col md='4' sm='12' className="petzola">
              <FormGroup>
                <label className='d-block mb-1'><span className='text-danger'>*</span>Status</label>
                <FormGroup>
                  <Controller

                    name='status'
                    control={control}
                    render={props => {
                      return (
                        <CustomInput
                          inline
                          type='radio'
                          label='Open'
                          value='Open'
                          id='status-open'
                          name={props.name}
                          onChange={() => setValue('status', 'Open')}
                        />
                      )
                    }}
                  />
                  <Controller

                    name='status'
                    control={control}
                    render={props => {
                      return (
                        <CustomInput
                          inline
                          type='radio'
                          label='Close'
                          value='Close'
                          id='status-close'
                          name={props.name}
                          onChange={() => setValue('status', 'Close')}
                        />
                      )
                    }}
                  />
                </FormGroup>
              </FormGroup>

            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='serviceLocationType'><span className='text-danger'>*</span>Service Location</Label>
                <Controller
                  as={Input}
                  type='select'
                  name='serviceLocationType'
                  control={control}

                >
                  <option value='Home Care'>Home Care</option>
                  <option value='Clinic Care'>Clinic Care</option>
                </Controller>
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='serviceCategory'><span className='text-danger'>*</span>Service Category</Label>
                <Select

                  isMulti
                  name="serviceCategory"
                  options={serviceCategories}
                  closeMenuOnSelect={false}
                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='xcoordinate'><span className='text-danger'>*</span>X Coordinate</Label>
                <Controller

                  control={control}
                  as={Input}
                  name='xcoordinate'
                  innerRef={register({ required: true })}
                  className={classnames({
                    'is-invalid': errors.xcoordinate
                  })}

                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='ycoordinate'><span className='text-danger'>*</span>Y Coordinate</Label>
                <Controller

                  control={control}
                  as={Input}
                  name='ycoordinate'
                  innerRef={register({ required: true })}
                  className={classnames({
                    'is-invalid': errors.ycoordinate
                  })}

                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='country'><span className='text-danger'>*</span>Country</Label>
                <Controller

                  control={control}
                  as={Input}
                  name='country'
                  innerRef={register({ required: true })}
                  className={classnames({
                    'is-invalid': errors.country
                  })}
                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='city'><span className='text-danger'>*</span>City</Label>
                <Controller

                  control={control}
                  as={Input}
                  name='city'
                  innerRef={register({ required: true })}
                  className={classnames({
                    'is-invalid': errors.city
                  })}
                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='landmark'><span className='text-danger'>*</span>Landmark</Label>
                <Controller

                  control={control}
                  as={Input}
                  name='landmark'
                  innerRef={register({ required: true })}
                  className={classnames({
                    'is-invalid': errors.landmark
                  })}
                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='area'><span className='text-danger'>*</span>Area</Label>
                <Controller

                  control={control}
                  as={Input}
                  name='area'
                  innerRef={register({ required: true })}
                  className={classnames({
                    'is-invalid': errors.area
                  })}
                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='street'><span className='text-danger'>*</span>Street</Label>
                <Controller

                  control={control}
                  as={Input}
                  name='street'
                  innerRef={register({ required: true })}
                  className={classnames({
                    'is-invalid': errors.street
                  })}
                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='phone'><span className='text-danger'>*</span>Branch Tel Number</Label>
                <Controller
                  as={Cleave}
                  control={control}
                  name='phone'

                  options={{ phone: true, phoneRegionCode: 'US' }}
                  className={classnames('form-control', {
                    'is-invalid': ''
                  })}
                />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='workingTimes'><span className='text-danger'>*</span>Branch Workdays</Label>

                <Row>
                  <Col md='10' sm='10'>
                    <Select
                      isMulti
                      name="workingTimes"
                      options={workingTimes}
                      closeMenuOnSelect={false}
                    />
                  </Col>
                  <Col md='2' sm='2'>
                    <span className="ml-auto" onClick={toggleWorkDays1}>
                      Edit
                    </span>
                  </Col>
                </Row>
                <WorkDays open={workDaysOpen1} toggleWorkDays={toggleWorkDays1} id='35' />

              </FormGroup>
            </Col>
            <div>

            </div>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='aboutClinic'>About Branch</Label>

                <Input type='textarea' name='aboutClinic' id='exampleText' rows='3' />
              </FormGroup>
            </Col>

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple color='secondary' outline>
                Reset
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )

}
// export default ClinicAccountTab
