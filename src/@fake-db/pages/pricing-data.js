import mock from '../mock'

const data = {
  pricing: [
    {
      id: 1,
      name: "Basic",
      desc: "A simple start for everyone",
      features: ["features1", "feature2", "feature3", "feature4"],
      price: 0,
      users: 5,
      stripeId: "price_1K2fWpF098ZdHI5Cvi55iB6v"
    },
    {
      id: 2,
      name: "Startup",
      desc: "test",
      features: ["features1 - Pro", "feature2 - Pro", "feature3 - Pro", "feature4 - Pro"],
      price: 50,
      users: 10,
      stripeId: "price_1K4nlNF098ZdHI5CS1DuXCEf"
    }
  ]
}

mock.onGet('/pricing/data').reply(() => [200, data.pricing])
