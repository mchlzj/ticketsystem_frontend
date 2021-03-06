import {useEffect, useState, useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import {getAllTickets} from '../../util/ApiCalls';
import TicketCard from '../../components/Card/TicketCard';
import {getUserName} from '../../util/UserCreds';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {TicketsContext} from './TicketsContext';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import NewElementButton from '../../components/Button/NewTicketButton'
import StatusFilter from '../../components/Filter/StatusFilter'
import {isClosedContext} from '../../util/FilterContext';


export default function AllTickets() {

// Initialisation of different context variables which are necessary for ticket data.
    const [tickets,setTickets] = useContext(TicketsContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isClosed, ] = useContext(isClosedContext);

// Get all Tickets from database and set related variables.
    useEffect(() => {
      getAllTickets()
      .then(data => {
        setTickets(data);
        console.log(data);
      })
      .then(() => setIsLoading(false))
      console.log("Api Call from AllTickets");
      console.log(getUserName());      
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


// Style definition
    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      fab: {
        position: 'fixed',
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

  const classes = useStyles();

  const allTickets = tickets.filter(ticket =>
     ticket.ticketClosed === isClosed
    );

// Returning AllTickets site
  return (  
    <div> 
      <StatusFilter/>
      <Grid container direction="row" alignItems="center" style={{ marginBottom: 15 }}>
        <Grid item>
          <MailIcon fontSize='large'/>
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="h6" component="h2" color="primary">
          &nbsp; Alle Tickets
          </Typography>
        </Grid>
      </Grid>
    <div>
      {isLoading ? null :
        <Grid container 
          justify="space-around"
          alignItems="flex-start" 
          spacing={4}>
          {allTickets.map(ticket => (
            <Grid item  xs={12} sm={6} md={4} lg={5} key={ticket.id} >
              <TicketCard 
              id={ticket.id}
              title={ticket.title} 
                description={ticket.description} 
                ticketClosed={ticket.ticketClosed}
                createdBy={ticket.createdBy.userName}
                modul={ticket.document.module.name}
                document={ticket.document.name}
                />
            </Grid>
          ))}
        </Grid>
}
</div>
  <NewElementButton/>
  <Backdrop className={classes.backdrop} open={isLoading} transitionDuration={300}>
    <CircularProgress color="inherit" />
  </Backdrop>
</div>

)}







