import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {TicketsProvider} from './pages/AllTickets/TicketsContext';
import {MobileOpenProvider} from './components/Drawer/MobileOpenContext';
import { LoginProvider } from './util/LoginContext';
import {UserNameProvider} from './util/UserCredsContext';
import {UserRoleProvider} from './util/UserCredsContext';
import {CommentsProvider} from './components/Comments/CommentContext';
import {ModulesProvider} from './pages/NewTicket/ModulesContext';
import {DocumentsProvider} from './pages/NewTicket/DocumentsContext';
import {IsClosedProvider} from './util/FilterContext';

ReactDOM.render(

  /*
  Die App Komponente wird mit sämtlichen ContextProvidern umschlossen, damit die Anwendung überall Zugriff auf sätmliche Zustände hat.
  Aufgrund der Große der Anwendung, muss hier nicht darauf geachtet werden, den Context nur in bestimmten Bereichen zugänglich zu machen.
  Die Context Komponenten sind ihren entsprechenden Komponenten in den Ordnern zugeteilt. 
  Unter util finden sich noch ein paar Context Komponenten, die Global Anwendung finden und nicht zugeordnet werden können
  */

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
