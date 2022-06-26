// ** UseJWT import to get config
import useJwt from '@src/auth/jwt/useJwt'
// import { cleanup as chatCleanup } from '../../../views/apps/chat/store/actions'

const config = useJwt.jwtConfig

// ** Handle User Login
export const handleLogin = data => {
  return dispatch => {
    dispatch({
      type: 'LOGIN',
      data,
      config
    })

    // ** Add to user, accessToken & refreshToken to localStorage
    // localStorage.setItem('userData', JSON.stringify(data))
    localStorage.setItem(config.storageTokenKeyName, data.accessToken)
    localStorage.setItem(config.storageRefreshTokenKeyName, data.refreshToken)
  }
}

// ** Handle User Logout
export const handleLogout = () => {
  return dispatch => {
    dispatch({ type: 'LOGOUT' })
    // dispatch(chatCleanup())

    // ** Remove user, accessToken & refreshToken from localStorage
    // localStorage.removeItem('userData')
    localStorage.removeItem(config.storageTokenKeyName)
    localStorage.removeItem(config.storageRefreshTokenKeyName)
  }
}
