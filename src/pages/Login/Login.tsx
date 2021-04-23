import React,{useContext, useState, useEffect} from 'react';
import {Grid, Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {LoginContext} from '../../util/LoginContext';
import {login} from '../../util/ApiCalls';
import auth, {getUserRole, getUserName} from '../../util/auth'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },

        margin: 'auto',
        width: '50%',
        padding: '10px',
    },
    inputField: {
        display: 'inline'
    },
  }),
);

export default function Login(props) {
  const classes = useStyles();

  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

const handleLogin = async() => {
  
    login(userName, password)
        .then(res => {
            localStorage.setItem('token', res.token);
            console.log(getUserRole());
            console.log(getUserName());
        }).then(e => {
          props.history.push('/newticket');
        }).catch(e => alert("invalid Username or Password"))
}

// useEffect(() => {
//     console.log(isLoggedIn);
//     if(localStorage.getItem('token')) {
//         setIsLoggedIn(true);
//         console.log(isLoggedIn);
//     }
// }, [])

const handleUserNameChange = ({target}) => {
    setUserName(target.value);
};
const handlePasswordChange = ({target}) => {
    setPassword(target.value);
};

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
>
        <TextField
          required
          id="username"
          label="Username"
          variant="outlined"
          onChange={handleUserNameChange}
        />
        <TextField
        required
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={handlePasswordChange}
        />
      <Button variant="contained" 
      color="primary" 
      disableElevation
      onClick={handleLogin}>
        Login
      </Button>
        </Grid>
      </div>
    </form>
  );
}

