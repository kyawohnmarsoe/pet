import { Mail, MessageSquare, Grid, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    header: 'Apps & Pages'
  },
  {
    id: 'profile',
    title: 'Profile',
    icon: <User size={20} />,
    navLink: '/pages/profile'
  },
  {
    id: 'clinics',
    title: 'Clinics',
    icon: <Grid size={20} />,
    navLink: '/clinics'
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/chat'
  },
  {
    id: 'patients',
    title: 'Patient',
    icon: <User size={20} />,
    navLink: '/apps/user/list'
  },
  {
    id: 'branches',
    title: 'Branch',
    icon: <User size={20} />,
    navLink: '/apps/branch/list'
  }
]
