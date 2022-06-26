// ** React Imports
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogout } from '@store/actions/auth'

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { Settings, CreditCard, Wifi, WifiOff, Power } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/avatars/avatar-blank.png'
// import { Socket } from '../../../../utility/context/socket'

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  // get socket for status
  // const socket = useContext(Socket)

  // ** State
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  //** Vars
  const userAvatar = (userData && userData.img) || defaultAvatar

  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name font-weight-bold'>{(userData && userData['firstname'])}</span>
          <span className='user-status'>{(userData && userData.role)}</span>
        </div>
        <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status={socket.connected ? 'online' : 'offline'} />
      </DropdownToggle>
      <DropdownMenu right>
        {/* {(!socket.connected) && <DropdownItem tag={Link} to="" onClick={(e) => {
          e.preventDefault()
          socket.reconnect()
        }}>
          <Wifi size={14} className='mr-75' />
          <span className='align-middle'>Connect</span>
        </DropdownItem>} */}
        {/* {(socket.connected) && <DropdownItem tag={Link} to="" onClick={(e) => {
          e.preventDefault()
          socket.disconnect()
        }}>
          <WifiOff size={14} className='mr-75' />
          <span className='align-middle'>Disconnect</span>
        </DropdownItem>} */}
        <DropdownItem tag={Link} to='/pages/account-settings'>
          <Settings size={14} className='mr-75' />
          <span className='align-middle'>Settings</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/pricing'>
          <CreditCard size={14} className='mr-75' />
          <span className='align-middle'>Pricing</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/login' onClick={() => dispatch(handleLogout())}>
          <Power size={14} className='mr-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
