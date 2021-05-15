import {useState } from 'react';
import {Grid, Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {login} from '../../util/ApiCalls';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Paper } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Style definition
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
        marginLeft: 'auto',
        marginRight: 'auto',

        width: '50vh',
        padding: '10px',
    },
    demo: {
      margin: '10px'
    },
    inputField: {
        display: 'inline'
    },
    media: {
      height: 140,
    },
    background: {
        margin: 'auto',
        width: '100%',
        height: '100vh',
        padding: '10px',
        background: "url('/media/BackgroundLogin.jpg')",
        position: 'fixed',
        top: '0',
        left: '0'
    }
  }),
);

export default function Login(props) {

  // Necessary consts
  const classes = useStyles();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

// Function which is called by clicking on the Login button
const handleLogin = async() => {
    login(userName, password)
        .then(res => {
            localStorage.setItem('token', res.token);    
        })
        .then(e => {
            props.history.push('/ticketSuchen');
        }).catch(e => alert("invalid Username or Password"))
}


//for simplicity extra handler. 
// Tutor Login Demo Button
const handleTutor = async() => {
  login('Janina.Mantel', 'sicher')
      .then(res => {
          localStorage.setItem('token', res.token);    
      })
      .then(e => {
          props.history.push('/ticketSuchen');
      }).catch(e => alert("invalid Username or Password"))
}

//for simplicity extra handler. 
// Student Login Demo Button
const handleStudent = async() => {
  login('Michael.Ziaja', 'sicher')
      .then(res => {
          localStorage.setItem('token', res.token);    
      })
      .then(e => {
          props.history.push('/ticketSuchen');
      }).catch(e => alert("invalid Username or Password"))
}

// Function which is called if the value of the userName textfield has changed
const handleUserNameChange = ({target}) => {
    setUserName(target.value);
};

// Function which is called if the value of the userPassword textfield has changed
const handlePasswordChange = ({target}) => {
    setPassword(target.value);
};

// Return Login Component
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
            alignItems="center">
            <TextField
              required
              id="Benutzername"
              label="Benutzername"
              variant="outlined"
              onChange={handleUserNameChange}/>
            <TextField
            required
              id="Passwort"
              label="Passwort"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={handlePasswordChange}/>
            <Button variant="contained" 
            color="secondary" 
            disableElevation
            onClick={handleLogin}
            fullWidth>
              Login
            </Button>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography variant='h6'>Demo Accounts</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Button variant="contained" 
                color="secondary" 
                disableElevation
                onClick={handleTutor}
                className={classes.demo}>
                  Tutor:in
                </Button>
                <Button variant="contained" 
                color="secondary" 
                disableElevation
                onClick={handleStudent}
                className={classes.demo}>
                  Student:in
                </Button>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Card>
      </form>
    </Paper>
  );
}