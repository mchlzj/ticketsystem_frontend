import  {useState,useEffect} from 'react'

import {getTicketById} from '../../ApiCalls/ApiCalls';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Chip from '@material-ui/core/Chip';
import { Divider } from '@material-ui/core';


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
    },[setTicket, match.params.id])

    return (<Card>
            <CardContent>
            {isLoading ? 
            <h1>Loading...</h1> : 
            <div>
              <Typography variant="h5">
                Titel
              </Typography>
              <Typography>
              {ticket.title}
              </Typography>
              <Typography variant="h5">
                Beschreibung
              </Typography>
              <Typography>
              {ticket.description}
              </Typography>
              <Typography variant="h5">
                Status
              </Typography>
              {ticket.closed? 
              <Chip label="geschlossen" color="secondary"/>:
              <Chip label="offen" color="primary"/>
            }
            <Typography variant="h5">
                Erstelldatum
              </Typography>
              <Typography>
              {ticket.createdDate}
              </Typography>
              <Typography variant="h5">
                Änderungsdatum
              </Typography>
              
              <Typography>
              {ticket.lastChangedDate}
              </Typography>
              <Divider variant="middle"/>

            </div>
            }
            </CardContent>
            </Card>
    )
}

export default Ticket
