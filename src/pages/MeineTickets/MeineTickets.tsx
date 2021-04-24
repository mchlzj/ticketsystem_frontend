import  {useEffect, useState, useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import {getAllTickets} from '../../util/ApiCalls';
// import { DataGrid, ColDef} from '@material-ui/data-grid';
import TicketCard from '../../components/Card/TicketCard';
import TicketSearchBar from '../../components/SearchBar/TicketSearchBar';
import {UserNameContext} from '../../util/UserCredsContext';
import auth from '../../util/auth';

export default function MeineTickets({tickets, setTickets}) {

    // const [tickets,setTickets] = useContext(TicketsContext);
    const [isLoading, setIsLoading] = useState(true);
    const [userName, setUserName] = useContext(UserNameContext);

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
              // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
      
    const myTickets = tickets.filter(ticket => ticket
      // .createdBy.userName === userName
      );

    return (  
      <div> 
      <TicketSearchBar/>

    {isLoading ? <h1>Loading...</h1> :

 <Grid container 
  justify="space-around"
  alignItems="flex-start" 
  spacing={2}>
    {myTickets.map(ticket => (
      <Grid item  xs={12} sm={6} md={4} lg={3} key={ticket.id} >
      <TicketCard 
      id={ticket.id}
      title={ticket.title} 
        description={ticket.description} 
        ticketClosed={ticket.ticketClosed}
        // createdBy={ticket.createdBy.userName}
        />
    </Grid>
    ))}
      </Grid>
}
    </div>

    // <div style={{ height: 400, width: '100%' }}>
    //   <DataGrid rows={tickets} columns={columns} pageSize={5} />
    // </div>
    )
}




