import { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, CustomInput } from 'reactstrap'
import Shifts from './Shifts'


const WorkDays = ({ open, toggleWorkDays, id }) => {

    return (
        <div className='demo-inline-spacing'>
            <div className='basic-modal petzola'>
                {/* <Button.Ripple color='primary' outline onClick={() => toggleWorkDays(!open)}>
                    Basic Modal
                </Button.Ripple> */}
                <Modal isOpen={open} toggle={() => toggleWorkDays(!open)} className='modal-lg modal-dialog-centered'>
                    <ModalHeader toggle={() => toggleWorkDays(!open)}>Branch Working Days</ModalHeader>
                    <ModalBody>
                        <div className="working-days">
                            <div className="row m-0">Saturday
                                <span className="ml-auto">
                                    <CustomInput
                                        type='switch'
                                        id='exampleCustomSwitch'
                                        name='customSwitch'
                                        inline
                                    />
                                </span>
                            </div>
                            <Shifts />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={() => toggleWorkDays(!open)}>
                            Accept
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}
export default WorkDays
