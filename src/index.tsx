// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {TicketsProvider} from './pages/AllTickets/TicketsContext';
import {TicketProvider} from './components/Ticket/TicketContext';
import {MobileOpenProvider} from './components/Drawer/MobileOpenContext';
import { LoginProvider } from './util/LoginContext';
import {UserNameProvider} from './util/UserCredsContext';
import {UserRoleProvider} from './util/UserCredsContext';
import {CommentsProvider} from './components/Comments/CommentContext';
import {ModulesProvider} from './pages/NewTicket/ModulesContext';



ReactDOM.render(
  // <React.StrictMode>
  <LoginProvider>
    <UserNameProvider> 
      <UserRoleProvider>
        <TicketsProvider>
          <MobileOpenProvider>
            <CommentsProvider>
              <ModulesProvider>
            <App />
            </ModulesProvider>
            </CommentsProvider>
          </MobileOpenProvider>
        </TicketsProvider>
      </UserRoleProvider>
    </UserNameProvider>
  </LoginProvider>,
    //,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
