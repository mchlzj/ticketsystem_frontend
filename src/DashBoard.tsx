import {useContext, useEffect} from 'react';
import {getAllTickets} from './util/ApiCalls';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Ticket from './components/Ticket/Ticket';
import Navigation from './layouts/Navigation/Navigation';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AllTickets from './pages/AllTickets/AllTickets';
import NewTicket from './pages/NewTicket/NewTicket';
import Statistics from './pages/Statistics/Statistics';
import MeineTickets from './pages/MeineTickets/MeineTickets';
import MirZugewieseneTickets from './pages/MirZugewieseneTickets/MirZugewieseneTickets';
import {TicketsContext} from './pages/AllTickets/TicketsContext';
import {LoginContext} from './util/LoginContext';
import auth from './util/auth'
import {UserNameContext, UserRoleContext} from './util/UserCredsContext';
import {ModulesContext} from './pages/NewTicket/ModulesContext';
import {getUserName,  getUserCredentials} from './util/UserCreds';
import {DocumentsContext} from './pages/NewTicket/DocumentsContext';


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
  const [userName,] = useContext(UserNameContext);
  const [userRole, setUserRole] = useContext(UserRoleContext);
  const [moduls,setModules] = useContext(ModulesContext);
  const [documents,setDocuments] = useContext(DocumentsContext);


  useEffect(() => {
    getAllTickets()
    .then(data => {
      setTickets(data);
    })
    console.log("Api Call from App");
          // eslint-disable-next-line react-hooks/exhaustive-deps
}, []) 

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
    console.log(isLoggedIn);
    console.log(auth.getUserRole());
    console.log(userName);
    console.log(getUserCredentials());
          // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



const classes = useStyles();

  return (

    <div className= {classes.root}>
        <Router>
          <Navigation history={props.history}/> 
          <main className={classes.content}>               
          <div className={classes.toolbar} />
          <Switch>
              <Route path="/newticket" render={() => <NewTicket moduls={moduls} setModules={setModules} documents={documents} setDocuments={setDocuments}/>}/>
              <Route path="/ticketSuchen" exact render={() => <AllTickets />}/>
              <Route path="/ticketSuchen/:id" component={Ticket}/>
              <Route path="/statistics" component={Statistics}/>
              <Route path="/meineTickets" render={() => <MeineTickets tickets={tickets} setTickets={setTickets}/>}/>
              <Route path="/MirZugewieseneTickets" render={() => <MirZugewieseneTickets tickets={tickets} setTickets={setTickets}/>}/>
          </Switch>
          </main>    
        </Router>            
      </div>       
  );
}

export default Dashboard;
