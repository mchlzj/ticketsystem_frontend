import {useState, useContext, useEffect} from 'react';
import {Grid, Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {login} from '../../util/ApiCalls';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Paper } from '@material-ui/core';
import Background from '../../../public/media/BackgroundLogin.jpg'
import {UserRoleContext} from '../../util/UserCredsContext';
import auth from '../../util/auth'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        // width: '25ch',
      },
        marginLeft: 'auto',
        marginRight: 'auto',

        width: '50vh',
        padding: '10px',
    },
    inputField: {
        display: 'inline'
    },
    media: {
      height: 140,
    },
    background: {
      // '& .MuiTextField-root': {
      //   margin: theme.spacing(1),
      //   width: '25ch',
      // },
        margin: 'auto',
        width: '100%',
        height: '100vh',
        padding: '10px',
        background: "url('/media/BackgroundLogin.jpg')",
        // minWidth: '1024px',
        position: 'fixed',
        top: '0',
        left: '0'
    }
  }),
);

export default function Login(props) {
  const classes = useStyles();

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [userRole, setUserRole] = useContext(UserRoleContext);

const handleLogin = async() => {
  
    login(userName, password)
        .then(res => {
            localStorage.setItem('token', res.token);    
        })
        .then(e => {
            props.history.push('/ticketSuchen');
        }).catch(e => alert("invalid Username or Password"))
}

const handleUserNameChange = ({target}) => {
    setUserName(target.value);
};
const handlePasswordChange = ({target}) => {
    setPassword(target.value);
};

  return (
    <Paper className={classes.background}>
    <form  className= {classes.root} noValidate autoComplete="off">
     
      <Card>
      <CardMedia
          className={classes.media}
          image="/media/LogoLogin.JPG"
          title="LogoLogin"
        />
      <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
>
        <TextField
          required
          id="Benutzername"
          label="Benutzername"
          variant="outlined"
          onChange={handleUserNameChange}
        />
        <TextField
        required
          id="Passwort"
          label="Passwort"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={handlePasswordChange}
        />
      <Button variant="contained" 
      color="secondary" 
      disableElevation
      onClick={handleLogin}
      fullWidth>
        Login
      </Button>
        </Grid>
      </Card>
    </form>
          </Paper>


    
  );
}

