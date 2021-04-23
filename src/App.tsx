import {useContext, useEffect} from 'react';
import {getAllTickets} from './util/ApiCalls';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Ticket from './components/Ticket/Ticket';
import Navigation from './layouts/Navigation/Navigation';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import './style-theme'

import AllTickets from './pages/AllTickets/AllTickets';
import NewTicket from './pages/NewTicket/NewTicket';
import Statistics from './pages/Statistics/Statistics';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import MeineTickets from './pages/MeineTickets/MeineTickets';
import MirZugewieseneTickets from './pages/MirZugewieseneTickets/MirZugewieseneTickets';


import {MobileOpenProvider} from './components/Drawer/MobileOpenContext';
import {TicketsContext} from './pages/AllTickets/TicketsContext';

import { theme } from './style-theme';

import {LoginContext} from './util/LoginContext';
import {UserNameContext, UserRoleContext} from './util/UserCredsContext';
import {getUserName, getUserRole, getUserCredentials} from './util/UserCreds';
import Dashboard from './DashBoard';
import {ProtectedRoute} from './protectedRoute'
import { useHistory } from 'react-router';


// import ApiPreCalls from './ApiCalls/ApiPreCalls';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

function App() {

  const [tickets,setTickets] = useContext(TicketsContext);
  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);
  const [userName, setUserName] = useContext(UserNameContext);
  const [userRole, setUserRole] = useContext(UserRoleContext);

  const history = useHistory();
//   useEffect(() => {
//     getAllTickets()
//     .then(data => {
//       setTickets(data);
//     })
//     console.log("Api Call from App");
// }, [setTickets]) 

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
    console.log(userRole);
    console.log(userName);
    console.log(getUserCredentials());
  }, [])



const classes = useStyles();

  return (
    
    <div className= {classes.root}>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route 
            exact 
            path="/login" 
            component={Login}
            history={history}/>
            <ProtectedRoute 
            exact 
            path="*" 
            component={Dashboard}
            history={history}/>
          </Switch>
         </ThemeProvider>

      </Router>

    </div>

    // <div className= {classes.root}>
    //     <Router>
        
        
        
    //       <main className={classes.content}>
    //       {/* <Navigation/>  */}
              
          
    //       <div className={classes.toolbar} />

    //       <Switch>
    //       <Route path="/login" exact component={Login}/>
    //       <Navigation/> 
    //             {/* <ApiPreCalls/> */}
    //             <Route path='/' exact>
    //               {!isLoggedIn ? <Redirect to="/login"/> : <HomePage/>}
    //               </Route> 
    //             <Route path="/newticket">
    //             {!isLoggedIn ? <Redirect to="/login"/> : <NewTicket/>}
    //             </Route>
    //             <Route path="/ticketSuchen" exact render={() =>
    //               !isLoggedIn ? <Redirect to="/login"/> : <AllTickets tickets={tickets} setTickets={setTickets} />
    //               }/>
    //             {/* <Route path="/ticketSuchen/:id" component={Ticket}/> */}
    //             <Route path="/statistics" >
    //             {!isLoggedIn ? <Redirect to="/login"/> : <Statistics/>}
    //               </Route>
    //               <Route path="/meineTickets" >
    //             {!isLoggedIn ? <Redirect to="/login"/> : <MeineTickets tickets={tickets} setTickets={setTickets} />}
    //               </Route>
    //               <Route path="/MirZugewieseneTickets" >
    //             {!isLoggedIn ? <Redirect to="/login"/> : <MirZugewieseneTickets tickets={tickets} setTickets={setTickets} />}
    //               </Route>

    //               </Switch>
    //           </main>
              
              
    //       </Router>
                  
    //       </div>

          
  );
}

export default App;
