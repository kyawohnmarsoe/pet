import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const ClinicsRoutes = [
  {
    path: '/clinics',
    component: lazy(() => import('../../views/clinics/list'))
  },
  {
    path: '/clinics/edit',
    exact: true,
    component: () => <Redirect to='/clinics/edit/1' />
  },
  {
    path: '/clinics/edit/:id',
    component: lazy(() => import('../../views/clinics/edit')),
    meta: {
      navLink: '/clinics/edit'
    }
  },
  {
    path: '/clinics/view',
    exact: true,
    component: () => <Redirect to='/clinics/view/1' />
  },
  {
    path: '/clinics/view/:id',
    component: lazy(() => import('../../views/clinics/view')),
    meta: {
      navLink: '/clinics/view'
    }
  }

]

export default ClinicsRoutes
