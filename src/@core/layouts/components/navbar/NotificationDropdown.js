// ** React Imports
import { Fragment, useContext, useEffect } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Bell, X, Check, AlertTriangle } from 'react-feather'
import {
  Button,
  Badge,
  Media,
  CustomInput,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clearNotifications, seenNotifications } from '../../../../redux/actions/notifi'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const NotificationDropdown = () => {

  const dispatch = useDispatch()

  const store = useSelector(state => state.notifi)
  const { notifications } = store
  const { newNotifications } = store

  // ** Notification Array
  const notificationsArray = notifications.sort((a, b) => {
    return b.date - a.date
  }).map((n) => {
    return {
      ...n,
      title: (
        <Media tag='p' heading>
          <span className='font-weight-bolder'>{n.titleTxt}</span>
          <span style={{ float: 'right' }}>{new Date(n.date).toLocaleTimeString()}</span>
        </Media>
      )
    }
  })

  // ** Function to render Notifications
  /*eslint-disable */
  const renderNotificationItems = () => {
    return (
      <PerfectScrollbar
        component='li'
        className='media-list scrollable-container'
        options={{
          wheelPropagation: false
        }}
      >
        {notificationsArray.map((item, index) => {
          return (
            <Link key={index} className='d-flex' to={item.link}>
              <Media
                className={classnames('d-flex', {
                  'align-items-start': !item.switch,
                  'align-items-center': item.switch
                })}
              >
                {!item.switch ? (
                  <Fragment>
                    <Media left>
                      <Avatar
                        {...(item.img
                          ? { img: item.img, imgHeight: 32, imgWidth: 32 }
                          : item.avatarContent
                            ? {
                              content: item.avatarContent,
                              color: item.color
                            }
                            : item.avatarIcon
                              ? {
                                icon: item.avatarIcon,
                                color: item.color
                              }
                              : null)}
                      />
                    </Media>
                    <Media body>
                      {item.title}
                      <small className='notification-text'>
                        <FormattedMessage id={item.notification} values={item} />
                      </small>
                    </Media>
                  </Fragment>
                ) : (
                  <Fragment>
                    {item.title}
                    {item.switch}
                  </Fragment>
                )}
              </Media>
            </Link>
          )
        })}
      </PerfectScrollbar>
    )
  }
  /*eslint-enable */

  return (
    <UncontrolledDropdown tag='li' className='dropdown-notification nav-item mr-25'>
      <DropdownToggle tag='a' className='nav-link' href='/' onClick={e => {
        e.preventDefault()
        dispatch(seenNotifications())
      }}>
        <Bell size={21} />
        {/* this is for notification count */}
        {(newNotifications > 0) && <Badge pill color='danger' className='badge-up'>
          {newNotifications}
        </Badge>}
      </DropdownToggle>
      <DropdownMenu tag='ul' right className='dropdown-menu-media mt-0'>
        <li className='dropdown-menu-header'>
          <DropdownItem className='d-flex' tag='div' header>
            <h4 className='notification-title mb-0 mr-auto'>Notifications</h4>
            {(newNotifications > 0) && <Badge tag='div' color='light-primary' pill>
              {newNotifications} New
            </Badge>}
          </DropdownItem>
        </li>
        {renderNotificationItems()}
        <li className='dropdown-menu-footer'>
          <Button.Ripple color='primary' block onClick={() => dispatch(clearNotifications())}>
            Clear all notifications
          </Button.Ripple>
        </li>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default NotificationDropdown
