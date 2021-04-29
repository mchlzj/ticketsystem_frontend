import  {useState,useEffect, useContext} from 'react'
import {CommentsContext} from '../Comments/CommentContext';
import { makeStyles } from '@material-ui/core/styles';
import {getTicketById} from '../../util/ApiCalls';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { Divider } from '@material-ui/core';
import classes from '*.module.css';
import { AutoSizer } from '@material-ui/data-grid';
import Comments from '../Comments/Comments';
import NewComment from '../Comments/NewComment';
import {TicketContext} from './TicketContext';

const useStyles = makeStyles({
  root: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Ticket({match}) {
  const classes = useStyles();

    const [ticket, setTicket] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useContext(CommentsContext);
    

    useEffect(() => {
        getTicketById(match.params.id)
        .then(data => {
          setTicket(data);
        })
        .then(() => setIsLoading(false))
        console.log('Called Ticket with Id ' + match.params.id);
    },[comments, match.params.id])

    return (
    <Card >
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
              <NewComment ticketID={ticket.id}/>
              <Comments comments={ticket.comments}/>
            </div>
            }
            </CardContent>
            </Card>
            


    )
}

export default Ticket
