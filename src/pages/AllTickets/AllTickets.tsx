import  {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid';
import {getAllTickets} from '../../util/ApiCalls';
// import { DataGrid, ColDef} from '@material-ui/data-grid';
import TicketCard from '../../components/Card/TicketCard';
import TicketSearchBar from '../../components/SearchBar/TicketSearchBar';
import {getUserName} from '../../util/UserCreds';

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

    return (  
      <div> 
      <TicketSearchBar/>

    {isLoading ? <h1>Loading...</h1> :

 <Grid container 
  justify="space-around"
  alignItems="flex-start" 
  spacing={2}>
    {tickets.map(ticket => (
      <Grid item  xs={12} sm={6} md={4} lg={3} key={ticket.id} >
      <TicketCard 
      id={ticket.id}
      title={ticket.title} 
        description={ticket.description} 
        ticketClosed={ticket.ticketClosed}
        createdBy={ticket.createdBy.userName}
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







