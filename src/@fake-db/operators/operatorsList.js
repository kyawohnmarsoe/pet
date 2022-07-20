import mock from '../mock'
import { paginateArray } from '../utils'

const data = {
    operators: [
        {
            enabled: 'enabled',
            id: 32,
            password: null,
            firstName: "Eshban",
            lastName: "Younis",
            photo: null,
            licenseKey: 12901900,
            licenseExpiry: "2022-01-01T12:12:12",
            email: "eshban@gmail.com",
            gender: "MALE",
            spokenLanguage: "ENGLISH",
            mobileNumber: "0501471760",
            fullArabicName: null,
            professionalTitle: "MR",
            aboutQualification: null,
            mainCateory: "PETCARE",
            speciality: null,
            assignedRoles: [3],
            assignedClinics: [1, 2],
            assignedServiceOffers: [2],
            customerID: 30,
            staffExternalID: null,
            creationDate: "2022-06-19T13:27:39",
            modificationDate: null,
            createdByUserID: "op_user_id",
            createdByUserName: "op_user"
        }
    ]
}

// GET ALL DATA
mock.onGet('/api/operators/list/all-data').reply(200, data.operators)


// POST: Add new operator
mock.onPost('/apps/operators/add-operator').reply(config => {
    // Get event from post data
    const operator = JSON.parse(config.data)

    const { length } = data.operators
    let lastIndex = 0
    if (length) {
        lastIndex = data.operators[length - 1].id
    }
    operator.id = lastIndex + 1

    data.operators.unshift(operator)

    return [201, { operator }]
})

// GET Updated DATA
mock.onGet('/api/operators/list/data').reply(config => {
    const { q = '', perPage = 10, page = 1} = config

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.operators.filter(
        operator =>
            (operator.email.toLowerCase().includes(queryLowered)) &&
            operator.firstName === (queryLowered)
    )
    /* eslint-enable  */

    return [
        200,
        {
            operators: paginateArray(filteredData, perPage, page),
            total: filteredData.length
        }
    ]
})

// GET Operator
mock.onGet('/api/operators/operator').reply(config => {
    const { id } = config
    const operator = data.operators.find(i => i.id === id)
    return [200, { operator }]
})

// DELETE: Deletes Operator
mock.onDelete('/apps/operators/delete').reply(config => {
    // Get Operator id from URL
    let operatorId = config.id

    // Convert Id to number
    operatorId = Number(operatorId)

    const operatorIndex = data.operators.findIndex(t => t.id === operatorId)
    data.opeartors.splice(operatorIndex, 1)

    return [200]
})
