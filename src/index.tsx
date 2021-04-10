// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import {TicketsProvider} from './pages/AllTickets/TicketsContext';
import {MobileOpenProvider} from './components/Drawer/MobileOpenContext';
import { LoginProvider } from './util/LoginContext';

ReactDOM.render(
  // <React.StrictMode>
  <LoginProvider>
    <TicketsProvider>
      <MobileOpenProvider>
        <App />
      </MobileOpenProvider>
    </TicketsProvider>
  </LoginProvider>,
    //,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
