import React from 'react';
import ReactDOM from 'react-dom/client';

import Routes from './routes';
import './global.css';
import './assets/typography.css';
import './assets/colors.css';
import UserProvider from './context/user/Provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <Routes />
    </UserProvider>
  </React.StrictMode>,
);
