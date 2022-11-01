import React from 'react';
import ReactDOM from 'react-dom/client';
import Contexts from './contexts';
import Routes from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contexts>
      <Routes />
    </Contexts>
  </React.StrictMode>
);
