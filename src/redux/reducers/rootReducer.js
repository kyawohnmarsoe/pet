// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import notifi from './notifi'
// import chat from '@src/views/apps/chat/store/reducer'
import todo from '@src/views/apps/todo/store/reducer'
import users from '@src/views/apps/user/store/reducer'
import email from '@src/views/apps/email/store/reducer'
import invoice from '@src/views/apps/invoice/store/reducer'
import calendar from '@src/views/apps/calendar/store/reducer'
import ecommerce from '@src/views/apps/ecommerce/store/reducer'
import dataTables from '@src/views/tables/data-tables/store/reducer'
import clinics from '@src/views/clinic/store/reducer'
import operators from '@src/views/operator/store/reducer'
import offers from '../../views/service-offers/store/reducer'

const rootReducer = combineReducers({
  auth,
  // chat,
  notifi,
  users,
  navbar,
  layout,
  clinics,
  operators
})

export default rootReducer
