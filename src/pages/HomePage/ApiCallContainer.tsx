import React, {useEffect, useContext, useState} from 'react'
import {TicketsContext} from '../AllTickets/TicketsContext';
import {getData} from '../AllTickets/ApiCalls';
import AllTickets from '../AllTickets/AllTickets';


export default function ApiCallContainer() {

    const [tickets,setTickets] = useContext(TicketsContext);
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData()
        .then(data => setTickets(data))
        // .then(() => setIsLoading(false))

    }, [tickets, setTickets])

    return ( 
        <div></div>  
//         <AllTickets tickets={tickets} setTickets={setTickets}/>
    )
}







