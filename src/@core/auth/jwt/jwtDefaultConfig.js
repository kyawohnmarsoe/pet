import { endPints } from "../../../configs/endPoints"

// ** Auth Endpoints
export default {
  loginEndpoint: `${endPints.baseUrl}/api/public/login`,
  registerEndpoint: `${endPints.baseUrl}/api/public/user`,
  refreshEndpoint: `${endPints.baseUrl}/refresh-token`,
  logoutEndpoint: `${endPints.baseUrl}/logout`,

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: '',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
}
