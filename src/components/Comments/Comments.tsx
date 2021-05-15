import {useEffect, useContext} from 'react'
import {CommentsContext} from './CommentContext';
import Comment from './Comment';
import NewComment from './NewComment';
import {getCommentByTicketId} from '../../util/ApiCalls';

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
