import React,{useContext} from 'react';
import {Grid, Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {LoginContext} from './LoginContext';

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

export default function SingIn() {
  const classes = useStyles();

  // const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);

  const url = 'http://localhost:59543/api/';
//https://www.hetfeld.name/ticket_backend/api/
//http://localhost:59543/api/

  const handleLogin = async() => {
    const response = await fetch(url + 'auth/login',
    {
      method: 'POST',
      body: JSON.stringify({
          userName: 'Michael.Ziaja@iubh-fernstudium.de',
          password: 'sicher'
      }), 
      mode: 'cors',
      headers: {
              'Content-Type' : 'application/json'
          }
  })
  .then(res => {
      console.log(res);
  });
    // try {
    //     if (response.ok) {
    //         const jsonResponse = await response.json();
    //         return jsonResponse;
    //     }
    //     throw new Error('Request Failed!');
    // } catch(error) {
    //     console.log(error);
    // }
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
          id="outlined-required"
          label="Username"
          variant="outlined"
        />
        <TextField
        required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      <Button variant="contained" 
      color="primary" 
      disableElevation
      onClick={handleLogin}>
        Primary
      </Button>
        </Grid>
      </div>
    </form>
  );
}

