import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const OperatorsRoutes = [
  {
    path: '/operator/list',
    component: lazy(() => import('../../views/operator/list'))
  },
  {
    path: '/operator/edit',
    exact: true,
    component: () => <Redirect to='/operator/edit/1' />
  },
  {
    path: '/operator/edit/:id',
    component: lazy(() => import('../../views/operator/edit')),
    meta: {
      navLink: '/operator/edit'
    }
  },
  {
    path: '/operator/view',
    exact: true,
    component: () => <Redirect to='/operator/view/1' />
  },
  {
    path: '/operator/view/:id',
    component: lazy(() => import('../../views/operator/view')),
    meta: {
      navLink: '/operator/view'}
    },
    {
      path: '/clinic/view/:id',
    component: lazy(() => import('../../views/operator/list')),
    meta: {
      navLink: '/clinic/view'
    }
  },
  {
    path: '/operator/workdays/edit/:id',
    component: lazy(() => import('../../views/operator/list')),
    meta: {
      navLink: '/operator/workdays/edit'
    }
  },
  {
    path: '/operator/create',
    component: lazy(() => import('../../views/operator/create'))
  }

]

export default OperatorsRoutes
