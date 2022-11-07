import {
  BrowserRouter, Navigate, Route, Routes as Switch,
} from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Menu />}>
        <Route exact path="/" element={<Home />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
