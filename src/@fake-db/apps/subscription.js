import mock from '../mock'

const data = {
  plans: [
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

mock.onGet('/apps/subscription/plans').reply(() => [200, data.plans])

// GET USER
mock.onGet('/apps/subscription/plan').reply(config => {
  const { id } = config
  const plan = data.plans.find(i => i.id === id)
  return [200, { plan }]
})
