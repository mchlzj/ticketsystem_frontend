import  {useEffect, useState} from 'react'

import {getAllTickets} from '../../ApiCalls/ApiCalls';
import { DataGrid, ColDef} from '@material-ui/data-grid';

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
    }, [])


    const columns: ColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Titel', width: 260 },
        { field: 'description', headerName: 'Beschreibung', width: 390 },
        { field: 'lastChangedDate', headerName: 'Änderungsdatum', width: 260 },
      ];
      

    return (   
    isLoading ? <h1>Loading...</h1> :
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={tickets} columns={columns} pageSize={5} />
    </div>
    )
}







