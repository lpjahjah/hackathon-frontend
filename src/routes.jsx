import {
  BrowserRouter, Navigate, Route, Routes as Switch,
} from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" element={<Home />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
