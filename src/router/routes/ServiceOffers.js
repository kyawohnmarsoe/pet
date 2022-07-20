import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const ServiceOffersRoutes = [
  {
    path: '/service-offer/list',
    component: lazy(() => import('../../views/service-offers/list'))
  },
  {
    path: '/service-offer/edit',
    exact: true,
    component: () => <Redirect to='/service-offers/edit/1' />
  },
  {
    path: '/service-offer/edit/:id',
    component: lazy(() => import('../../views/service-offers/edit')),
    meta: {
      navLink: '/service-offers/edit'
    }
  },
  {
    path: '/service-offer/view',
    exact: true,
    component: () => <Redirect to='/service-offers/view/1' />
  },
  {
    path: '/service-offer/view/:id',
    component: lazy(() => import('../../views/service-offers/list')),
    meta: {
      navLink: '/service-offers/view'
    }
  },
  {
    path: '/service-offer/create',
    component: lazy(() => import('../../views/service-offers/create'))
  }

]

export default ServiceOffersRoutes

