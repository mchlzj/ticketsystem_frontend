import {useContext, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import './style-theme'
import Login from './pages/Login/Login';
import { theme } from './style-theme';
import {LoginContext} from './util/LoginContext';
import { getUserCredentials} from './util/UserCreds';
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
  
  const [, setIsLoggedIn] = useContext(LoginContext);

  const history = useHistory();

  useEffect(() => {
      if (localStorage.getItem('token')) {
        setIsLoggedIn(true);
      }
      // console.log(userRole);
      // console.log(userName);
      console.log(getUserCredentials());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

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
  );
}

export default App;
