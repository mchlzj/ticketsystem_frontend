import React ,{useEffect, useContext} from 'react'
import {CommentsContext} from './CommentContext';
import Comment from './Comment';
import NewComment from './NewComment';
import {getTicketById, changeTicketStatus, getCommentByTicketId} from '../../util/ApiCalls';
import {alterInMs} from '../../util/Date';

function Comments({ticketID}) {
    
    const [comments, setComments] = useContext(CommentsContext);

    useEffect(() => {
        getCommentByTicketId(ticketID)
            .then(data => {
                setComments(data);
                console.log(data);
            })
    },[])

    return (
        <div>
        <NewComment ticketID={ticketID}/>
            {comments.map(comment => (
                <Comment 
                key={comment.id} 
                commentText={comment.text} 
                commentCreator={comment.createdBy.userName}
                commentDate={comment.createdDate}
                />
            ))}
        </div>
    )
}

export default Comments
