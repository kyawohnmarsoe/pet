import { Ability } from '@casl/ability'
import useJwt from '@src/auth/jwt/useJwt'
import { initialAbility, adminAbility } from './initialAbility'

//  Read ability from localStorage
// * Handles auto fetching previous abilities if already logged in user
// ? You can update this if you store user abilities to more secure place
// ! Anyone can update localStorage so be careful and please update this
const userData = useJwt.parseToken()
const existingAbility = userData ? userData.roles[0] === 'ROLE_ADMIN' ? adminAbility : initialAbility : initialAbility

export const initAbility = () => {
    const userData = useJwt.parseToken()
    const existingAbility = userData ? userData.roles[0] === 'ROLE_ADMIN' ? adminAbility : initialAbility : initialAbility
    return existingAbility
}

export default new Ability(existingAbility)
