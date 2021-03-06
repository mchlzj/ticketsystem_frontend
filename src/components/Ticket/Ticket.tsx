import {useState,useEffect} from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {getTicketById, changeTicketStatus} from '../../util/ApiCalls';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import Comments from '../Comments/Comments';
import CreateIcon from '@material-ui/icons/Create';
import Box from '@material-ui/core/Box'
import Switch from '@material-ui/core/Switch';
import auth from '../../util/auth'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

// Style definition
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    pos: {
      marginBottom: 12,
    },
    title: {
        width: '50ch'
    },
    description: {
        width: '150ch',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      textTransform: 'none'
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    }
  }),
);


function Ticket({match}) {

// Initialisation of different context variables 
// which are necessary for getting and setting the ticket data.
    const [ticket, setTicket] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);
    const [status, setStatusValue] = useState<any>();
    const classes = useStyles();

// Load Ticket with specific id from database and set the related variables.
    useEffect(() => {
        getTicketById(match.params.id)
        .then(data => {
          setTicket(data);
          setStatusValue(data.ticketClosed);
          console.log(data.ticketClosed);
        })
        .then(() => {
          setIsLoading(false);
        })
        console.log('Called Ticket with Id ' + match.params.id);
    },[match.params.id])

// Function for Switch-Status-Button which instantly updates the status param in the database.
    const handleStatusSwitch = (event) => {
      setStatusValue(event.target.checked);
      changeTicketStatus(ticket.id);
    };


// Returning the ticket component
    return (
      <div>
        {isLoading ? null : 
          <div>
            <Grid container direction="row" alignItems="center" style={{ marginBottom: 15 }}>
              <Grid item>
                <CreateIcon fontSize='large'/>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="h2" color="primary">
                &nbsp; Ticketübersicht
                </Typography>
              </Grid>
            </Grid>

            <form className={classes.root} noValidate autoComplete="off">
            <Grid container justify="flex-start" alignItems="flex-start" spacing={1}>
              <Grid item xs={"auto"}>
                <Card variant='outlined' style={{ borderRadius: 15, borderWidth: 2, borderColor: 'black'}}>
                  <CardContent>
                    <Grid container justify="space-around" alignItems="flex-start" spacing={2}>
                      <Grid item xs={12}>
                        <Typography gutterBottom variant="body1" component="h2" color="primary">
                        <Box fontWeight="fontWeightBold" fontSize={18}>
                          Titel
                        </Box>
                        </Typography>
                        <Typography gutterBottom variant="body1" component="h2" color="primary">
                        <Box fontSize={18}>
                          {ticket.title}
                        </Box>
                        </Typography>                  
                        </Grid>
                      <Grid item xs={12}>
                        <Typography gutterBottom variant="body1" component="h2" color="primary">
                        <Box fontWeight="fontWeightBold" fontSize={18}>
                          Beschreibung
                        </Box>
                        </Typography>
                        <Typography gutterBottom variant="body1" component="h2" color="primary">
                        <Box fontSize={18}>
                          {ticket.description}
                        </Box>
                        </Typography>                    
                        </Grid>
                        <Grid item xs={12}>
                        <Typography gutterBottom variant="body1" component="h2" color="primary">
                        <Box fontWeight="fontWeightBold" fontSize={18}>
                          Modul
                        </Box>
                        </Typography>
                        <Typography gutterBottom variant="body1" component="h2" color="primary">
                        <Box fontSize={18}>
                          {ticket.document.module.name}
                        </Box>
                        </Typography>
                        </Grid>
                        <Grid item xs={12}>
                        <Typography gutterBottom variant="body1" component="h2" color="primary">
                        <Box fontWeight="fontWeightBold" fontSize={18}>
                          Format
                        </Box>
                        </Typography>
                        <Typography gutterBottom variant="body1" component="h2" color="primary">
                        <Box fontSize={18}>
                          {ticket.document.name}
                        </Box>
                        </Typography>  
                      </Grid>
                      <Grid item xs={12}>
                        <Typography gutterBottom variant="body1" component="h2" color="primary">
                        <Box fontWeight="fontWeightBold" fontSize={18}>
                          Ersteller
                        </Box>
                        </Typography>
                        <Typography gutterBottom variant="body1" component="h2" color="primary">
                        <Box fontSize={18}>
                          {ticket.createdBy.userName}
                        </Box>
                        </Typography>  
                      </Grid>
                      <Grid item xs={12}>
                        <Typography gutterBottom variant="body1" component="h2" color="primary">
                        <Box fontWeight="fontWeightBold" fontSize={18}>
                          Status
                        </Box>
                        </Typography>
                        {
                          ticket.document.module.responsible.userName===auth.getUserName() ?
                          <FormGroup>
                            <FormControlLabel label={status ? "Geschlossen" : "Offen"} control={<Switch
                          checked={status}
                          onChange={handleStatusSwitch}
                          name="checkedA"
                          inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />}/>
                          </FormGroup> :
                        <Typography gutterBottom variant="body1" component="h2" color="primary">
                        <Box fontSize={18}>
                          {ticket.ticketClosed ? "Geschlossen" : "Offen"}
                        </Box>
                        </Typography>
                        }
                        </Grid>
                    </Grid>
                    <Divider variant="middle"/>
                    <Comments ticketID={ticket.id}/>
                  </CardContent>
                </Card>
                </Grid>
              </Grid>
            </form>
        <Typography gutterBottom variant="body1" component="h2" color="primary">
        <Box fontSize={18}>
        Das Ticket wurde am {ticket.createdDate.split('T')[0].split('-')[2]}.{ticket.createdDate.split('T')[0].split('-')[1]}.{ticket.createdDate.split('T')[0].split('-')[0]} erstellt und zuletzt am {ticket.lastChangedDate.split('T')[0].split('-')[2]}.{ticket.lastChangedDate.split('T')[0].split('-')[1]}.{ticket.lastChangedDate.split('T')[0].split('-')[0]} um {ticket.lastChangedDate.split('T')[1].split(':')[0]}:{ticket.lastChangedDate.split('T')[1].split(':')[1]} Uhr geändert.
        </Box>
        </Typography>
  </div>}

  <Backdrop className={classes.backdrop} open={isLoading} transitionDuration={300}>
    <CircularProgress color="inherit" />
  </Backdrop>

</div>

)}

export default Ticket

