import mock from '../mock'
const data = {
    customer:
    {
        accountInformation: {
            img: "",
            contactNumber: "2242342",
            dateofBirth: "2022-7-12",
            email: "abcd@gmail.com",
            firstName: "AAA",
            gender: "MALE",
            id: 12,
            identityExpirydate: "2022-7-12",
            identityNumber: "AVB2234",
            identityType: "NATIONAL_ID",
            isEmailVerified: "yes",
            isMobileVerified: "yes",
            lastName: "YOy",
            mobileNumber: "23423234",
            noOfAllowedAdmin: 4,
            noOfAllowedOperator: 3,
            password: "adminadmin",
            preferedContactOptions: ["Email"],
            primaryLanguage: "Spanish",
            status: "Inactive",
            subscriptionPlanId: 3,
            userRoleId: 'BASIC',
            websiteURL: "www.dogdog.com"
        },
        bankAccountInformation: {
            accountHolderName: "OAH",
            accountNumber: "23423423424",
            bankName: "EMBCD",
            createdByUserID: "2",
            createdByUserName: "kyaw",
            creationDate: "2022-7-12",
            iBAN: "JKUI7878",
            modificationDate: "2022-7-12",
            petzolaCommisionPercent: 30,
            stripeAccountCreationDate: "2022-7-12",
            stripeCustomerAccoundID: 4
        },
        businessProfile: {
            addressLine1: "No.234",
            addressLine2: "AL BU Thee",
            city: "Dubai",
            companyName: "Ball Ma",
            companyNumber: "234",
            companyTradeLicense: "sdjfjlkj324",
            companyType: "SPA",
            country: "UAE",
            currency: "AED",
            postCode: "2342",
            state: "Dubai",
            timeZone: "Dubai"

        }
    }
}

mock.onGet('/api/customer/profile/data').reply(() => [200, data.customer])
