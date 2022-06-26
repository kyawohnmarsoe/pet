import * as actions from "../../actions/notifi/actions"

// **  Initial State
const initialState = {
  notifications: [],
  newNotifications: 0
}

const notifiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NOTIFICATION:
      return {
        notifications: [...state.notifications, action.value],
        newNotifications: state.newNotifications + 1
      }
    case actions.SEEN_NOTIFICATION:
      return {
        ...state,
        newNotifications: 0
      }
    case actions.CLEAR_NOTIFICATIONS:
      return {
        notifications: [],
        newNotifications: 0
      }
    default:
      return state
  }
}

export default notifiReducer
