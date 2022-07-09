import mock from '../mock'
const data = {
    customers: [
        {
            accountInformation: {
                contactNumber: "2242342",
                dateofBirth: "2022 - 07 - 09T13: 13: 55.517Z",
                email: "abcd@gmail.com",
                firstName: "AAA",
                gender: "FEMALE",
                id: 12,
                identityExpirydate: "2022 - 07 - 09T13: 13: 55.517Z",
                identityNumber: "AVB2234",
                identityType: "NATIONAL_ID",
                isEmailVerified: "yes",
                isMobileVerified: "yes",
                lastName: "YOy",
                mobileNumber: "23423234",
                noOfAllowedAdmin: 4,
                noOfAllowedOperator: 3,
                password: "adminadmin",
                preferedContactOptions: [
                    "EMAIL"
                ],
                primaryLanguage: "english",
                status: "ACTIVE",
                subscriptionPlanId: 3,
                userRoleId: 2,
                websiteURL: "www.dogdog.com"
            },
            bankAccountInformation: {
                accountHolderName: "OAH",
                accountNumber: "23423423424",
                bankName: "EMBCD",
                createdByUserID: "2",
                createdByUserName: "kyaw",
                creationDate: "2022 - 07 - 09T13: 13: 55.517Z",
                iBAN: "JKUI7878",
                modificationDate: "2022 - 07 - 09T13: 13: 55.517Z",
                petzolaCommisionPercent: 30,
                stripeAccountCreationDate: "2022 - 07 - 09T13: 13: 55.517Z",
                stripeCustomerAccoundID: 4
            },
            businessProfile: {
                addressLine1: "No.234",
                addressLine2: "AL BU Thee",
                city: "Dubai",
                companyName: "Ball Ma",
                companyNumber: "234",
                companyTradeLicense: "sdjfjlkj324",
                companyType: "CLINIC",
                country: "UAE",
                currency: "AED",
                postCode: "2342",
                state: "Dubai",
                timeZone: "Dubai"

            }
        }]
}

mock.onGet('/customers/data').reply(() => [200, data.accountSetting])
