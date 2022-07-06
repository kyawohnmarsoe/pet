import mock from '../mock'
import { paginateArray } from '../utils'

const data = {
    clinics: [
        {
            id: 35,
            clinicCode: "35",
            clinicName: "Cute Pet",
            address: {
                city: "dubai"
            },
            phone: "123342",
            status: "Active"
        },
        {
            id: 36,
            clinicCode: "36",
            clinicName: "Cute Dogs",
            address: {
                city: "dubai"
            },
            phone: "123333342",
            status: "Active"
        }
    ]
}

// GET ALL DATA
mock.onGet('/api/clinics/list/all-data').reply(200, data.clinics)
// mock.onGet('/api/clinics/list/all-data').reply(config => {
//     return [200, data]
// })


// POST: Add new clinic
mock.onPost('/apps/clinics/add-clinic').reply(config => {
    // Get event from post data
    const clinic = JSON.parse(config.data)

    const { length } = data.clinics
    let lastIndex = 0
    if (length) {
        lastIndex = data.clinics[length - 1].id
    }
    clinic.id = lastIndex + 1

    data.clinics.unshift(clinic)

    return [201, { clinic }]
})

// GET Updated DATA
mock.onGet('/api/clinics/list/data').reply(config => {
    const { q = '', perPage = 10, page = 1, role = null, currentPlan = null, status = null } = config

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.clinics.filter(
        clinic =>
            (clinic.clinicName.toLowerCase().includes(queryLowered)) &&
            clinic.status === (status || clinic.status)
    )
    /* eslint-enable  */

    return [
        200,
        {
            clinics: paginateArray(filteredData, perPage, page),
            total: filteredData.length
        }
    ]
})

// GET clinic
mock.onGet('/api/clinics/clinic').reply(config => {
    const { id } = config
    const clinic = data.clinics.find(i => i.id === id)
    return [200, { clinic }]
})

// DELETE: Deletes clinic
mock.onDelete('/apps/clinics/delete').reply(config => {
    // Get clinic id from URL
    let clinicId = config.id

    // Convert Id to number
    clinicId = Number(clinicId)

    const clinicIndex = data.clinics.findIndex(t => t.id === clinicId)
    data.clinics.splice(clinicIndex, 1)

    return [200]
})
