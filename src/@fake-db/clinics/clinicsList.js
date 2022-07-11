import mock from '../mock'
import { paginateArray } from '../utils'

const data = {
    clinics: [
        {
            avatar: '',
            id: 34,
            aboutClinic: "skfjsijfeimdmvcd,s",
            address: {
                area: "Downtown",
                city: "Dubai",
                country: "UAE",
                landmark: "Dubai Mall",
                mapLocation: {
                    xcoordinate: "0",
                    ycoordinate: "0"
                },
                street: "Al Blah Blah"
            },
            clinicCode: "90",
            clinicName: "Snowy Fur",
            phone: "9090909",
            rate: "0",
            serviceCategory: [{ value: 'General Consultation', label: 'General Consultation' }],
            serviceLocationType: "Clinic Care",
            status: "Open",
            tollFree: "DEF",
            users: [
                {
                    clinicWorkingTimes: [
                        {
                            clinicId: 12,
                            id: 88,
                            numBookingSlot: 3,
                            opCategoryFilter: "Vaccination",
                            operators: [2],
                            serviceDuration: 30,
                            serviceLocationFilter: "Downtown",
                            services: [1, 2, 3],
                            shifts: {
                                additionalProp1: [
                                    {
                                        from: "SAT",
                                        id: 1,
                                        to: "MON"
                                    }
                                ],
                                additionalProp2: [
                                    {
                                        from: "FRI",
                                        id: 2,
                                        to: "SUN"
                                    }
                                ],
                                additionalProp3: [
                                    {
                                        from: "TUE",
                                        id: 3,
                                        to: "THU"
                                    }
                                ]
                            },
                            status: "ACTIVE",
                            timeBetweenService: 30,
                            title: "Big Big Big"
                        }
                    ],
                    country: "UAE",
                    email: "kohnmars@gmail.com",
                    firstname: "mo",
                    id: "34",
                    lastname: "mo",
                    mobile: "999992332",
                    roleInClinic: "ADMIN",
                    roles: ["VET"],
                    serviceOfferId: 3
                }
            ],
            workingTimes:
            {
                clinicId: 2,
                id: 3,
                numBookingSlot: 10,
                opCategoryFilter: "Vaccination",
                operators: [2, 3],
                serviceDuration: 40,
                serviceLocationFilter: "Downtown",
                services: [4, 5],
                shifts: [
                    {
                        value: 'Saturday',
                        label: 'Saturday',
                        from: "MON",
                        id: 1,
                        to: "SAT"
                    },
                    {
                        value: 'Tuesday',
                        label: 'Tuesday',
                        from: "FRI",
                        id: 2,
                        to: "SUN"
                    }
                ],
                status: "ACTIVE",
                timeBetweenService: 50,
                title: "Aye Say Lay"
            }

        },
        {
            id: 35,
            clinicCode: "35",
            clinicName: "Cute Pet",
            address: {
                city: "dubai"
            },
            phone: "123342",
            status: "Active",
            avatar: ''
        },
        {
            id: 36,
            clinicCode: "36",
            clinicName: "Cute Dogs",
            address: {
                city: "dubai"
            },
            phone: "123333342",
            status: "Active",
            avatar: ''
        }
    ]
}

// GET ALL DATA
mock.onGet('/api/clinics/list/all-data').reply(200, data.clinics)


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
