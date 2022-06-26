import * as actions from "./actions"

// ** Handles ADD notification
export const addNotification = value => dispatch => dispatch({ type: actions.ADD_NOTIFICATION, value })
export const clearNotifications = value => dispatch => dispatch({ type: actions.CLEAR_NOTIFICATIONS })
export const seenNotifications = value => dispatch => dispatch({ type: actions.SEEN_NOTIFICATION })