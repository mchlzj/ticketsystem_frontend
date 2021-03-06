import  {useEffect, useState, useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import {getAllTickets} from '../../util/ApiCalls';
import TicketCard from '../../components/Card/TicketCard';
import {UserNameContext, } from '../../util/UserCredsContext';
import {isClosedContext} from '../../util/FilterContext';
import auth from '../../util/auth';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import NewElementButton from '../../components/Button/NewTicketButton'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import StatusFilter from '../../components/Filter/StatusFilter';

export default function MeineTickets({tickets, setTickets}) {


    // Necessary consts
    const [isLoading, setIsLoading] = useState(true);
    const [userName, setUserName] = useContext(UserNameContext);
    const [isClosed, ] = useContext(isClosedContext);

    useEffect(() => {
        getAllTickets()
        .then(data => {
          setTickets(data);
          console.log(data);
        })
        .then(() => setIsLoading(false))
        .then(() => setUserName(auth.getUserName()))
        .then(() => console.log(userName));
        console.log("Api Call from MyTickets");
    }, [isClosed])

    // Style definition
    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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

  const classes = useStyles();

    // Filter myTickets
    const myTickets = tickets.filter(ticket =>
      ticket.createdBy.userName === userName && ticket.ticketClosed === isClosed
      );

    // Return myTickets Component
    return (  
      <div> 
      <StatusFilter/>
      <Grid container direction="row" alignItems="center" style={{ marginBottom: 15 }}>
          <Grid item>
            <MailIcon fontSize='large'/>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="h2" color="primary">
            &nbsp; Meine Tickets
            </Typography>
          </Grid>
        </Grid>
        {isLoading ? null :
          <Grid container 
            justify="space-around"
            alignItems="flex-start" 
            spacing={4}>
            {myTickets.map(ticket => (
              <Grid item  xs={12} sm={6} md={4} lg={5} key={ticket.id} >
                <TicketCard
                id={ticket.id}
                title={ticket.title} 
                description={ticket.description} 
                ticketClosed={ticket.ticketClosed}
                createdBy={ticket.createdBy.userName}
                modul={ticket.document.module.name}
                document={ticket.document.name}/>
              </Grid>
            ))}
          </Grid>
        }
        <NewElementButton/>
        <Backdrop className={classes.backdrop} open={isLoading} transitionDuration={300}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )
}