import React from 'react';
import {
  BrowserRouter, Navigate, Route, Routes as Switch,
} from 'react-router-dom';

import Menu from './components/Menu';
import Home from './pages/Home';
import Login from './pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Login />} />
        <Route path="/" element={<Menu />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
