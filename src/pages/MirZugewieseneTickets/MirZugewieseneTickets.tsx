import  {useEffect, useState, useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import {getAllTickets} from '../../util/ApiCalls';
// import { DataGrid, ColDef} from '@material-ui/data-grid';
import TicketCard from '../../components/Card/TicketCard';
import TicketSearchBar from '../../components/SearchBar/TicketSearchBar';
import auth from '../../util/auth';
import jwt_decode from "jwt-decode";
import {UserNameContext, UserRoleContext} from '../../util/UserCredsContext';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import Fab from '@material-ui/core/Fab'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';

export default function MirZugewieseneTickets({tickets, setTickets}) {

    // const [tickets,setTickets] = useContext(TicketsContext);
    const [isLoading, setIsLoading] = useState(true);
    const [userName, setUserName] = useContext(UserNameContext);

    useEffect(() => {
        getAllTickets()
        .then(data => {
          setTickets(data);
        })
        .then(() => setIsLoading(false))
        .then(() => setUserName(auth.getUserName()))
        // .then(() => console.log(userName));
        console.log("Api Call from MyTickets"); 
              // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
      console.log(userName);
    }, [userName])


    const myTickets = tickets.filter(ticket => ticket.document.module.responsible.userName === userName
      );


    return (  
      <div> 
        {/*<TicketSearchBar/>*/}

        <Grid container direction="row" alignItems="center" style={{ marginBottom: 15 }}>
          <Grid item>
            <MailIcon fontSize='large'/>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="h2" color="primary">
            &nbsp; Mir zugewiesene Tickets
            </Typography>
          </Grid>
        </Grid>

    {isLoading ? <h1>Loading...</h1> :

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
      createdBy={ticket.document.module.responsible.userName}
      //modul={ticket.document.module.name}
        />

    </Grid>
    ))}
      </Grid>
}

    <Fab variant="extended" size="medium" color="secondary" className={classes.fab} onClick={handleCreateNewTicket}>
      <AddIcon />
      &nbsp; Neues Ticket
    </Fab>

    </div>
    )
}




