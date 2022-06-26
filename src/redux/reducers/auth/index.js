// **  Initial State
const initialState = {
  userData: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      const cloneData = { ...action.data }
      delete cloneData.accessToken
      delete cloneData.refreshToken
      return {
        ...state,
        userData: cloneData
      }
    case 'LOGOUT':
      const obj = { ...action }
      delete obj.type
      return { ...state, userData: {} }
    default:
      return state
  }
}

export default authReducer
