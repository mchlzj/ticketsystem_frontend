import  {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid';
import {getAllTickets} from '../../util/ApiCalls';
// import { DataGrid, ColDef} from '@material-ui/data-grid';
import TicketCard from '../../components/Card/TicketCard';
import TicketSearchBar from '../../components/SearchBar/TicketSearchBar';
import jwt_decode from "jwt-decode";
import {getUserName, getUserCredentials} from '../../util/UserCreds';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import Fab from '@material-ui/core/Fab'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';

export default function AllTickets({tickets, setTickets}) {

    // const [tickets,setTickets] = useContext(TicketsContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      getAllTickets()
      .then(data => {
        setTickets(data);
      })
      .then(() => setIsLoading(false))
      console.log("Api Call from AllTickets");
      console.log(getUserName());      
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        textTransform: 'none'
      }
    }),
  );

  const classes = useStyles();
  const history = useHistory();

  const handleCreateNewTicket = () => {
    history.push('/newTicket');
  };

    // const columns: ColDef[] = [
    //     { field: 'id', headerName: 'ID', width: 70 },
    //     { field: 'title', headerName: 'Titel', width: 260 },
    //     { field: 'description', headerName: 'Beschreibung', width: 390 },
    //     { field: 'lastChangedDate', headerName: 'Änderungsdatum', width: 260 },
    //   ];
      

    return (  
      <div> 
      {/*<TicketSearchBar/>*/}

      <Grid container direction="row" alignItems="center" style={{ marginBottom: 15 }}>
          <Grid item>
            <MailIcon fontSize='large'/>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="h2" color="primary">
            &nbsp; Tickets suchen
            </Typography>
          </Grid>
        </Grid>

    {isLoading ? <h1>Loading...</h1> :

 <Grid container 
  justify="space-around"
  alignItems="flex-start" 
  spacing={4}>
    {tickets.map(ticket => (
      <Grid item  xs={12} sm={6} md={4} lg={5} key={ticket.id} >
      <TicketCard 
      id={ticket.id}
      title={ticket.title} 
        description={ticket.description} 
        ticketClosed={ticket.ticketClosed}
        createdBy={ticket.createdBy.userName}
        modul={ticket.document.module.name}
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

    // <div style={{ height: 400, width: '100%' }}>
    //   <DataGrid rows={tickets} columns={columns} pageSize={5} />
    // </div>
    )
}







