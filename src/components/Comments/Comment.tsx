import React ,{useEffect, useContext} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {TicketContext} from '../Ticket/TicketContext';

function Comment({commentText, commentCreator, commentDate}) {
    const [ticket, setTicket] = useContext(TicketContext);

    const dateString = Date.parse(commentDate);
    const date = new Date(dateString);

    const handleDelete = () => {

        // ticket.comments.map(e => {
        //     e.id !== comment.id
        // });

    }

    return (
        <Card >
            <CardContent>
                <div>

                <Typography variant="body1">
                    {commentText}
                </Typography>
                <Typography display='inline' align='left' variant="caption">
                    von: {commentCreator} 
                </Typography>      
                <br></br>
                <Typography display='inline' align='right'variant="caption"> 
                    Erstellt am : {date.toLocaleDateString()} um {date.toLocaleTimeString()}
                </Typography> 
                </div>
            </CardContent>
        </Card>
    )
}

export default Comment
