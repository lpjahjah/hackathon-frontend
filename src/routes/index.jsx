import {
  BrowserRouter, Route, Routes as Switch,
} from 'react-router-dom';

import Menu from '../components/Menu';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import ProtectedRoutes from './protectedRoutes';
import Home from '../pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Login />} />

      <Route path="/" element={<Menu />}>
        <Route
          path="/"
          element={(
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
)}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
