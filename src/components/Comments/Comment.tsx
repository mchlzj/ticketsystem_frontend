import React ,{useEffect, useContext} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {TicketContext} from '../Ticket/TicketContext';

function Comment({comment}) {
    const [ticket, setTicket] = useContext(TicketContext);

    const handleDelete = () => {

        // ticket.comments.map(e => {
        //     e.id !== comment.id
        // });

    }

    return (
        <Card >
            <CardContent key={comment.id}>
                <div>
                <Typography variant="h5">
                    {comment.text}
                </Typography>
                {comment.createdBy === null 
                ?
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                :
                null
            }
                
                </div>
            </CardContent>
        </Card>
    )
}

export default Comment
