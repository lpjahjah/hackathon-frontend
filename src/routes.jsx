import {
  BrowserRouter, Route, Routes as Switch,
} from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Menu />}>
        <Route exact path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
