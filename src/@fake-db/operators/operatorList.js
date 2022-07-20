import mock from '../mock'
import { paginateArray } from '../utils'

const data = {
    operators: [
        {
            "enabled": true,
            "id": 43,
            "password": "sadfasdf",
            "firstName": "jhkjksadfhi",
            "lastName": "KsaifImran",
            "photo": null,
            "licenseKey": null,
            "licenseExpiry": "2022-01-01T12:12:12",
            "email": "thkjhk@gmail.com",
            "gender": "MALE",
            "spokenLanguage": "ENGLISH",
            "mobileNumber": "0501471760",
            "fullArabicName": null,
            "professionalTitle": "MR",
            "aboutQualification": null,
            "mainCateory": "PETCARE",
            "speciality": null,
            "assignedRoles": [
                3
            ],
            "assignedClinics": [
                1
            ],
            "assignedServiceOffers": [
                1
            ],
            "customerID": 30,
            "staffExternalID": null,
            "creationDate": "2022-07-13T01:53:19.65",
            "modificationDate": null,
            "createdByUserID": "op_user_id",
            "createdByUserName": "op_user"
        },
        {
            "enabled": true,
            "id": 44,
            "password": "sadfasdf",
            "firstName": "Kyaw",
            "lastName": "KsaifImran",
            "photo": null,
            "licenseKey": null,
            "licenseExpiry": "2022-01-01T12:12:12",
            "email": "thkjhk@gmail.com",
            "gender": "MALE",
            "spokenLanguage": "ENGLISH",
            "mobileNumber": "0501471760",
            "fullArabicName": null,
            "professionalTitle": "MR",
            "aboutQualification": null,
            "mainCateory": "PETCARE",
            "speciality": null,
            "assignedRoles": [
                3
            ],
            "assignedClinics": [
                1
            ],
            "assignedServiceOffers": [
                1
            ],
            "customerID": 30,
            "staffExternalID": null,
            "creationDate": "2022-07-13T01:53:19.65",
            "modificationDate": null,
            "createdByUserID": "op_user_id",
            "createdByUserName": "op_user"
        },
        {
            "enabled": true,
            "id": 45,
            "password": "sadfasdf",
            "firstName": "Ohn",
            "lastName": "KsaifImran",
            "photo": null,
            "licenseKey": null,
            "licenseExpiry": "2022-01-01T12:12:12",
            "email": "thkjhk@gmail.com",
            "gender": "MALE",
            "spokenLanguage": "ENGLISH",
            "mobileNumber": "0501471760",
            "fullArabicName": null,
            "professionalTitle": "MR",
            "aboutQualification": null,
            "mainCateory": "PETCARE",
            "speciality": null,
            "assignedRoles": [
                3
            ],
            "assignedClinics": [
                1
            ],
            "assignedServiceOffers": [
                1
            ],
            "customerID": 30,
            "staffExternalID": null,
            "creationDate": "2022-07-13T01:53:19.65",
            "modificationDate": null,
            "createdByUserID": "op_user_id",
            "createdByUserName": "op_user"
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
    const { q = '', perPage = 10, page = 1, role = null, currentPlan = null, status = null } = config

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.operators.filter(
        operator =>
            (operator.operatorName.toLowerCase().includes(queryLowered)) &&
            operator.status === (status || operator.status)
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

// GET operator
mock.onGet('/api/operators/operator').reply(config => {
    const { id } = config
    const operator = data.operators.find(i => i.id === id)
    return [200, { operator }]
})

// DELETE: Deletes operator
mock.onDelete('/apps/operators/delete').reply(config => {
    // Get operator id from URL
    let operatorId = config.id

    // Convert Id to number
    operatorId = Number(operatorId)

    const operatorIndex = data.operators.findIndex(t => t.id === operatorId)
    data.operators.splice(operatorIndex, 1)

    return [200]
})
