import React from 'react';
import ReactDOM from 'react-dom/client';

import Routes from './routes';
import './global.css';
import './assets/typography.css';
import './assets/colors.css';
import Contexts from './contexts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contexts>
      <Routes />
    </Contexts>
  </React.StrictMode>
);
