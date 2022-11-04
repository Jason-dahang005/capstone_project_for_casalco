import Dashboard from "../../components/admin/Dashboard"
import MembershipApplication from "../../components/admin/MembershipApplication"


const routes = [
  { path: '/admin',                                 exact: true,      name: 'Admin' },
  { path: '/admin/dashboard',                       exact: true,      name: 'Dashboard',                    component: Dashboard },
  { path: '/admin/membership-application',          exact: true,      name: 'Membership Application',       component: MembershipApplication }
]

export default routes