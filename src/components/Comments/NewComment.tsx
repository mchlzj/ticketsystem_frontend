import React, {useState, useContext, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {newComment} from '../../util/ApiCalls';
import {CommentsContext} from '../Comments/CommentContext';
import { isNullOrUndefined } from 'util';
import {getTicketById, changeTicketStatus, getCommentByTicketId} from '../../util/ApiCalls';

// Style definition
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

function NewComment({ticketID}) {

    // Necessary consts
    const classes = useStyles();
    const [comment, setComment] = useState('');
    const [comments, setComments] = useContext(CommentsContext);

    // setComment if value of textfield has changed
    const changeValue = (e) => {
        setComment(e.target.value);
        console.log("value on Change:" + comment)
    }
    const handleSubmit = async() => {
      if (comment!=""){
        console.log("value on submit" + comment);
        await newComment(ticketID, comment);
        const data = await getCommentByTicketId(ticketID)
        await setComments(data);
        setComment('');
      } else {
        alert('Bitte geben Sie einen Kommentar ein!');
      }
    }

    // Return NewComment Component
    return (
        <div>
            <br></br>
        <TextField
          id="outlined-multiline-flexible"
          label="Neuer Kommentar"
          multiline
          rows={4}
          size='small'
          variant="outlined"
          onChange={changeValue}
          value={comment}
          fullWidth={true}
        />
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        endIcon={<SendIcon />}
        onClick={handleSubmit}
      >
        Abschicken
      </Button>
        </div>
    )
}

export default NewComment