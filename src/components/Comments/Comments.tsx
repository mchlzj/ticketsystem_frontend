import React ,{useEffect} from 'react'
import Comment from './Comment';

function Comments({comments}) {
    
    useEffect(() => {
        console.log(comments);
    },[])
    return (
        <div>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment}/>
            ))}
        </div>
    )
}

export default Comments
