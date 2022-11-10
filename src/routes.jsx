import { useEffect } from 'react';
import {
  BrowserRouter, Route, Routes as Switch, useNavigate,
} from 'react-router-dom';

import Menu from './components/Menu';
import { useAuth } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const Routes = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser.email) navigate('login');
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />

        <Route path="/" element={<Menu />}>
          <Route exact path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
