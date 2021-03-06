import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const ClinicsRoutes = [
  {
    path: '/clinic/list',
    component: lazy(() => import('../../views/clinic/list'))
  },
  {
    path: '/clinic/edit',
    exact: true,
    component: () => <Redirect to='/clinic/edit/1' />
  },
  {
    path: '/clinic/edit/:id',
    component: lazy(() => import('../../views/clinic/edit')),
    meta: {
      navLink: '/clinic/edit'
    }
  },
  {
    path: '/clinic/view',
    exact: true,
    component: () => <Redirect to='/clinic/view/1' />
  },
  {
    path: '/clinic/view/:id',
    component: lazy(() => import('../../views/clinic/view')),
    meta: {
      navLink: '/clinic/view'
    }
  },
  {
    path: '/clinic/workdays/edit/:id',
    component: lazy(() => import('../../views/clinic/list')),
    meta: {
      navLink: '/clinic/workdays/edit'
    }

  },
  {
    path: '/clinic/create',
    component: lazy(() => import('../../views/clinic/create'))
  }

]

export default ClinicsRoutes
