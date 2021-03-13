import React, {useState, useContext,useEffect} from 'react'
import {TicketsContext} from '../../pages/AllTickets/TicketsContext';
import {getTicketById} from '../../ApiCalls/ApiCalls';

function Ticket({match}) {

    const [ticket, setTicket] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getTicketById(match.params.id)
        .then(data => {
          setTicket(data);
        })
        .then(() => setIsLoading(false))
        console.log('Called Ticket with Id ' + match.params.id);
    },[setTicket])

    return (<div>
            {isLoading ? 
            <h1>Loading...</h1> : 
            <div>
            <h1>{ticket.title}</h1>
            <h1>{ticket.description}</h1>
            <h1>{ticket.ticketClosed}</h1>
            <h1>{ticket.createdDate}</h1>
            <h1>{ticket.lastChangedDate}</h1>
            </div>
            }
            </div>
    )
}

export default Ticket
