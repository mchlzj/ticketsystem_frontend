import {useContext, useEffect} from 'react';
import {getAllTickets} from './util/ApiCalls';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Ticket from './components/Ticket/Ticket';
import Navigation from './layouts/Navigation/Navigation';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


import AllTickets from './pages/AllTickets/AllTickets';
import NewTicket from './pages/NewTicket/NewTicket';
import Statistics from './pages/Statistics/Statistics';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import MeineTickets from './pages/MeineTickets/MeineTickets';
import MirZugewieseneTickets from './pages/MirZugewieseneTickets/MirZugewieseneTickets';


import {MobileOpenProvider} from './components/Drawer/MobileOpenContext';
import {TicketsContext} from './pages/AllTickets/TicketsContext';
import {LoginContext} from './util/LoginContext';
import {UserNameContext, UserRoleContext} from './util/UserCredsContext';
import {ModulesContext} from './pages/NewTicket/ModulesContext';
import {getUserName,  getUserCredentials} from './util/UserCreds';



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

function Dashboard(props) {

  const [tickets,setTickets] = useContext(TicketsContext);
  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);
  const [userName, setUserName] = useContext(UserNameContext);
  const [userRole, setUserRole] = useContext(UserRoleContext);
  const [moduls,setModules] = useContext(ModulesContext);

  useEffect(() => {
    getAllTickets()
    .then(data => {
      setTickets(data);
    })
    console.log("Api Call from App");
}, [setTickets]) 

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
    console.log(isLoggedIn);
    console.log(userName);
    console.log(getUserCredentials());
  }, [])



const classes = useStyles();

  return (
    
    // <div>
    //     Welcome to Dashboard
    //     <h1>Status: {isLoggedIn} </h1>
    // </div>

    <div className= {classes.root}>
        <Router>

          <Navigation history={props.history}/> 

        

          <main className={classes.content}>
          {/* <Navigation/>  */}
               
          <div className={classes.toolbar} />
          <Switch>
              <Route path="/newticket" render={() => <NewTicket moduls={moduls} setModules={setModules}/>}/>
              <Route path="/ticketSuchen" exact render={() => <AllTickets tickets={tickets} setTickets={setTickets} />}/>
              <Route path="/ticketSuchen/:id" component={Ticket}/>
              <Route path="/statistics" component={Statistics}/>
              <Route path="/meineTickets" render={() => <MeineTickets tickets={tickets} setTickets={setTickets}/>}/>
              <Route path="/MirZugewieseneTickets" render={() => <MirZugewieseneTickets tickets={tickets} setTickets={setTickets}/>}/>
          
          
          {/* <Route path="/login" exact component={Login}/> */}
                {/* <ApiPreCalls/> */}
                {/* <Route path='/' exact>
                  {!isLoggedIn ? <Redirect to="/login"/> : <HomePage props={props}/>}
                  </Route> 
                <Route path="/newticket">
                {!isLoggedIn ? <Redirect to="/login"/> : <NewTicket/>}
                </Route>
                <Route path="/ticketSuchen" exact render={() =>
                  !isLoggedIn ? <Redirect to="/login"/> : <AllTickets tickets={tickets} setTickets={setTickets} />
                  }/>
                {/* <Route path="/ticketSuchen/:id" component={Ticket}/> */}
                {/* <Route path="/statistics" > */}
                {/* {!isLoggedIn ? <Redirect to="/login"/> : <Statistics/>}
                  </Route>
                  <Route path="/meineTickets" >
                {!isLoggedIn ? <Redirect to="/login"/> : <MeineTickets tickets={tickets} setTickets={setTickets} />}
                  </Route>
                  <Route path="/MirZugewieseneTickets" >
                {!isLoggedIn ? <Redirect to="/login"/> : <MirZugewieseneTickets tickets={tickets} setTickets={setTickets} />} */}
                  {/* </Route> */} 

                  </Switch>
              </main>
              
             
          </Router>
                  
          </div>

          
  );
}

export default Dashboard;
