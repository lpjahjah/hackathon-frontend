import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

const menuItems = [
  {
    display: 'Dashboard',
    icon: <i className="bx bx-home" />,
    to: '/',
    section: '',
  },
  {
    display: 'Getting Started',
    icon: <i className="bx bx-star" />,
    to: '/started',
    section: 'started',
  },
  {
    display: 'Calendar',
    icon: <i className="bx bx-calendar" />,
    to: '/calendar',
    section: 'calendar',
  },
  {
    display: 'User',
    icon: <i className="bx bx-user" />,
    to: '/user',
    section: 'user',
  },
  {
    display: 'Orders',
    icon: <i className="bx bx-receipt" />,
    to: '/order',
    section: 'order',
  },
];

const Menu = () => (
  <>
    <Sidebar menuItems={menuItems} />
    <Outlet />
  </>
);

export default Menu;
