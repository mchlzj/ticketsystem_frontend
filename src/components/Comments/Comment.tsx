import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Comment({commentText, commentCreator, commentDate}) {

    const dateString = Date.parse(commentDate);
    const date = new Date(dateString);

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
