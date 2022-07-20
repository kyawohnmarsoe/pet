import mock from '../mock'
import { paginateArray } from '../utils'

const data = {
    offers: [
            {
                id: 4,
                serviceDetailId: 1,
                name: "asdfsadf",
                discountedPrice: 1231.0,
                actualPrice: 1231.123,
                clinicID: 'clinic 1',
                offerTite: "Hi",
                offerDescription: "descr",
                offerTite_ar: "Arabic",
                offerDescription_ar: "Arabc",
                mainCateory: "VETCARE",
                serviceCateory: "sadfsa",
                subCateory: "sdfsdfsf",
                serviceLocation: "ASds",
                firstVisitPrice: 12.111,
                beforeSalePrice: 31.22,
                followUpPrice: 3.121,
                status: "ACTIVE",
                assignedOperators: [5],
                petType: "PET",
                forOnlyPetSize: "11",
                forPetWeightFromKG: "21",
                forOnlyPetWeightKG: "33",
                offerSpecification: "Offer Spec",
                offerSpecification_ar: "Pfffer",
                offerRestrictions: "OR",
                offerRestrictions_ar: "offerRestrictions",
                maxQuantityPerOrder: 121,
                offerPhoto: null,
                creationDate: null,
                modificationDate: null,
                createdByUserID: null,
                createdByUserName: null
            }
    ]
}

// GET ALL DATA
mock.onGet('/api/service-offer/list/all-data').reply(200, data.offers)


// POST: Add new offer
mock.onPost('/apps/service-offer/add-offer').reply(config => {
    // Get event from post data
    const offer = JSON.parse(config.data)

    const { length } = data.offers
    let lastIndex = 0
    if (length) {
        lastIndex = data.offers[length - 1].id
    }
    offer.id = lastIndex + 1

    data.offers.unshift(offer)

    return [201, { offer }]
})

// GET Updated DATA
mock.onGet('/api/service-offer/list/data').reply(config => {
    const { q = '', perPage = 10, page = 1} = config

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.offers.filter(
        offer =>
            (offer.serviceLocation.toLowerCase().includes(queryLowered)) &&
            offer.mainCateory === (queryLowered)
    )
    /* eslint-enable  */

    return [
        200,
        {
            offers: paginateArray(filteredData, perPage, page),
            total: filteredData.length
        }
    ]
})

// GET offer
mock.onGet('/api/service-offer/offer').reply(config => {
    const { id } = config
    const offer = data.offers.find(i => i.id === id)
    return [200, { offer }]
})

// DELETE: Delete Offer
mock.onDelete('/apps/service-offer/delete').reply(config => {
    // Get offer id from URL
    let offerId = config.id

    // Convert Id to number
    offerId = Number(offerId)

    const offerIndex = data.offers.findIndex(t => t.id === offerId)
    data.offerId.splice(offerIndex, 1)

    return [200]
})
