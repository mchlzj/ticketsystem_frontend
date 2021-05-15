import React from 'react';
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
import {DocumentsProvider} from './pages/NewTicket/DocumentsContext';
import {IsClosedProvider} from './util/FilterContext';

ReactDOM.render(
  <LoginProvider>
    <UserNameProvider> 
      <UserRoleProvider>
        <TicketsProvider>
          <MobileOpenProvider>
            <CommentsProvider>
              <ModulesProvider>
                <DocumentsProvider>
                  <IsClosedProvider>
                    <App />
                  </IsClosedProvider>
                </DocumentsProvider>
              </ModulesProvider>
            </CommentsProvider>
          </MobileOpenProvider>
        </TicketsProvider>
      </UserRoleProvider>
    </UserNameProvider>
  </LoginProvider>
  ,
  document.getElementById('root')
);

reportWebVitals();