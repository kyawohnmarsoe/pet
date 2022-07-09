import { Fragment, useState } from 'react'
import { Label } from 'reactstrap'
import Flatpickr from 'react-flatpickr'

const Timepickers = ({ basic, setBasic }) => {
    return (
        <Fragment>
            <Flatpickr
                className='form-control'
                value={basic}
                id='timepicker'
                options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: 'H:i',
                    time_24hr: true
                }}
                onChange={date => setBasic(date)}
            />
        </Fragment>
    )
}

export default Timepickers
