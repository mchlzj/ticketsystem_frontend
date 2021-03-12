import {useContext, useEffect} from 'react';
import {getAllTickets} from './ApiCalls/ApiCalls';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './layouts/Navigation/Navigation';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


import AllTickets from './pages/AllTickets/AllTickets';
import NewTicket from './pages/NewTicket/NewTicket';
import Statistics from './pages/Statistics/Statistics';
import HomePage from './pages/HomePage/HomePage';



import {MobileOpenProvider} from './components/Drawer/MobileOpenContext';
import {TicketsContext} from './pages/AllTickets/TicketsContext';
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

  useEffect(() => {
    getAllTickets()
    .then(data => {
      setTickets(data);
    })
    console.log("Api Call from App");
}, [setTickets]) 

const classes = useStyles();

  return (
    
    <div className= {classes.root}>
      <Router>
        <MobileOpenProvider>
          <Navigation/> 
        </MobileOpenProvider>
        <main className={classes.content}>
          <div className={classes.toolbar} />
              {/* <TicketsProvider> */}
                {/* <ApiPreCalls/> */}
              <Switch>
              <Route path='/' exact component={HomePage}/>
              <Route path="/newticket" component={NewTicket}/>
              <Route path="/alltickets" render={() => <AllTickets tickets={tickets} setTickets={setTickets} />}/>
              <Route path="/statistics" component={Statistics}/>
              </Switch>
              {/* </TicketsProvider> */}
        </main>
      </Router>
    </div>
  );
}

export default App;
