import { Outlet } from 'react-router-dom';

import Sidebar from '../Sidebar';

const Menu = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

export default Menu;
