import {
  BrowserRouter, Route, Routes as Switch,
} from 'react-router-dom';

import Menu from '../components/Menu';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';
import Track from '../pages/Track';
import Subtrack from '../pages/Subtrack';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Login />} />

      <Route path="/" element={<Menu />}>
        <Route
          path="/"
          element={(<ProtectedRoute><Home /></ProtectedRoute>)}
        />

        <Route
          path="/:track"
          element={(<ProtectedRoute><Track /></ProtectedRoute>)}
        />

        <Route
          path="/:track/:subtrack"
          element={(<ProtectedRoute><Subtrack /></ProtectedRoute>)}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
