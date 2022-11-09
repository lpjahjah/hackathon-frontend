import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../Sidebar';

function Menu() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Menu;
