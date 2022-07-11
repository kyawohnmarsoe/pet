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
                <Modal isOpen={open} toggle={() => toggleWorkDays(!open)} className='modal-lg modal-dialog-centered petzola'>
                    <ModalHeader toggle={() => toggleWorkDays(!open)}>Branch Working Days</ModalHeader>
                    <ModalBody>
                        <div className="working-days">
                            <Shifts day="Sunday" />
                            <Shifts day="Monday" />
                            <Shifts day="Tuesday" />
                            <Shifts day="Thursday" />
                            <Shifts day="Friday" />
                            <Shifts day="Saturday" />
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
