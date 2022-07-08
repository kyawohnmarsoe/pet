// ** React Imports
import { useState, useEffect } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'


// ** Third Party Components
import { Lock, Edit, Trash2 } from 'react-feather'
import {
  Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, Card, CardHeader, CardTitle, CardBody,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'
import WorkDays from '../list/WorkDays'

const ClinicAccountTab = ({ selectedClinic }) => {
  // ** States
  const [img, setImg] = useState(null)
  const [clinicData, setClinicData] = useState(null)

  // ** Function to change user image
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  // ** Update user image on mount or change
  useEffect(() => {
    if (selectedClinic !== null || (selectedClinic !== null && clinicData !== null && selectedClinic.id !== clinicData.id)) {
      setClinicData(selectedClinic)
      if (selectedClinic.avatar.length) {
        return setImg(selectedClinic.avatar)
      } else {
        return setImg(null)
      }
    }
  }, [selectedClinic])

  const options = [
    { value: '1', label: 'General Consultation' },
    { value: '2', label: 'Vaccination' },
    { value: '3', label: 'Internal Medicine' }
  ]
  const workdaysOptions = [
    { value: '1', label: 'Saturday' },
    { value: '2', label: 'Tuesday' },
    { value: '3', label: 'Thursday' }
  ]
  const [formModal, setFormModal] = useState(false)

  const [workDaysOpen1, setWorkDaysOpen1] = useState(false)
  const toggleWorkDays1 = () => setWorkDaysOpen1(!workDaysOpen1)

  // ** Renders User
  const renderUserAvatar = () => {
    if (img === null) {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded mr-2 my-25'
          content={selectedClinic.clinicName}
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

  if (clinicData === null || clinicData === undefined) {
    return null
  } else {
    return (
      <Row>

        <Col sm='12'>
          <Media className='mb-2'>
            {renderUserAvatar()}
            <Media className='mt-50' body>
              <h4>{selectedClinic.clinicName} </h4>
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
          <Form onSubmit={e => e.preventDefault()}>
            <Row>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='username'><span className='text-danger'>*</span>Branch Name</Label>
                  <Input type='text' id='username' placeholder='Username' defaultValue={clinicData.clinicName} disabled />
                </FormGroup>
              </Col>

              <Col md='4' sm='12' className="petzola">
                <FormGroup>
                  <Label for='username'><span className='text-danger'>*</span>Status</Label>
                  <div className='demo-inline-spacing'>
                    <CustomInput type='radio' label='Open' name='status' id='open' />
                    <CustomInput type='radio' label='Close' name='status' id='close' />
                  </div>
                </FormGroup>
              </Col>

              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='name'><span className='text-danger'>*</span>Service Location</Label>
                  <Input type='text' id='name' placeholder='Name' defaultValue={clinicData.clinicName} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='email'><span className='text-danger'>*</span>Service Category</Label>
                  {/* <Input type='text' id='email' placeholder='Email' defaultValue={clinicData.clinicName} /> */}

                  <Select
                    closeMenuOnSelect={false}
                    defaultValue={[options[4], options[5]]}
                    isMulti
                    options={options}
                  />

                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='email'><span className='text-danger'>*</span>X Coordinate</Label>
                  <Input type='text' id='email' placeholder='Email' defaultValue={clinicData.clinicName} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='email'><span className='text-danger'>*</span>Y Coordinate</Label>
                  <Input type='text' id='email' placeholder='Email' defaultValue={clinicData.clinicName} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='status'><span className='text-danger'>*</span>Country</Label>
                  <Input type='select' name='status' id='status' defaultValue={clinicData.clinicName}>
                    <option value='pending'>Pending</option>
                    <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='role'><span className='text-danger'>*</span>City</Label>
                  <Input type='select' name='role' id='role' defaultValue={clinicData.clinicName}>
                    <option value='admin'>Admin</option>
                    <option value='author'>Author</option>
                    <option value='editor'>Editor</option>
                    <option value='maintainer'>Maintainer</option>
                    <option value='subscriber'>Subscriber</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='company'><span className='text-danger'>*</span>Landmark</Label>
                  <Input
                    type='text'
                    id='company'
                    defaultValue={clinicData.clinicName}
                    placeholder='WinDon Technologies Pvt Ltd'
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='company'><span className='text-danger'>*</span>Landmark</Label>
                  <Input
                    type='text'
                    id='company'
                    defaultValue={clinicData.clinicName}
                    placeholder='WinDon Technologies Pvt Ltd'
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='company'><span className='text-danger'>*</span>Street</Label>
                  <Input
                    type='text'
                    id='company'
                    defaultValue={clinicData.clinicName}
                    placeholder='WinDon Technologies Pvt Ltd'
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='company'><span className='text-danger'>*</span>Branch Tel Number</Label>
                  <Input
                    type='text'
                    id='company'
                    defaultValue={clinicData.clinicName}
                    placeholder='WinDon Technologies Pvt Ltd'
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='company'><span className='text-danger'>*</span>Branch Workdays</Label>

                  <Row>
                    <Col md='10' sm='10'>
                      <Select
                        closeMenuOnSelect={false}
                        defaultValue={[workdaysOptions[4], workdaysOptions[5]]}
                        isMulti
                        options={workdaysOptions}
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
                  <Label for='company'>About Branch</Label>
                  <Input
                    type='text'
                    id='company'
                    defaultValue={clinicData.clinicName}
                    placeholder='WinDon Technologies Pvt Ltd'
                  />
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
}
export default ClinicAccountTab
