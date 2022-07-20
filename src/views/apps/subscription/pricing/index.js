import { useState, useEffect, Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'
import PricingFaqs from './PricingFaqs'
import PricingCards from './PricingCards'
import PricingTrial from './PricingTrial'
import PricingHeader from './PricingHeader'

import '@styles/base/pages/page-pricing.scss'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getPlan } from '../store/actions'

const Pricing = () => {
  const [data, setData] = useState(null),
  [duration, setDuration] = useState('monthly')
   // ** States
   const [activeView, setActiveView] = useState('grid')
   const [sidebarOpen, setSidebarOpen] = useState(false)
    // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.subscriptions)

  const { testId } = useParams()

   // ** Get products
   useEffect(() => {
    // axios.get('https://petzola-business.herokuapp.com/api/public/subscription/plans').then(res => {
    axios.get('/apps/subscription/plans').then(res => {
      setData(res.data)
      // console.log(res.data)
    })

    console.log(testId)
   }, [dispatch])

  return (
    <div id='pricing-table'>
      <PricingHeader duration={duration} setDuration={setDuration} />
      {/* {data !== null && faq !== null ? ( */}
      {data !== null ? (
        <Fragment>
          <PricingCards 
          data={data} 
          duration={duration} 
           store={store}
           dispatch={dispatch}
           getPlan={getPlan}
           />
          <PricingTrial />
          {/* <PricingFaqs data={faq} /> */}
        </Fragment>
      ) : null}
    </div>
  )
}

export default Pricing
