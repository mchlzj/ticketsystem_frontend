import  {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid';
import {getAllTickets} from '../../util/ApiCalls';
// import { DataGrid, ColDef} from '@material-ui/data-grid';
import TicketCard from '../../components/Card/TicketCard';
import TicketSearchBar from '../../components/SearchBar/TicketSearchBar';

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
    }, [setTickets])


    // const columns: ColDef[] = [
    //     { field: 'id', headerName: 'ID', width: 70 },
    //     { field: 'title', headerName: 'Titel', width: 260 },
    //     { field: 'description', headerName: 'Beschreibung', width: 390 },
    //     { field: 'lastChangedDate', headerName: 'Änderungsdatum', width: 260 },
    //   ];
      

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
        ticketClosed={ticket.ticketClosed}/>
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







