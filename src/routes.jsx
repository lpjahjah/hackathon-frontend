import {
  BrowserRouter, Navigate, Route, Routes as Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
