import React, {useState, useContext, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {newComment} from '../../util/ApiCalls';
import {CommentsContext} from '../Comments/CommentContext';
import { isNullOrUndefined } from 'util';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);


function NewComment({ticketID}) {
    const classes = useStyles();
    const [comment, setComment] = useState('');
    const [rerender, setRerender] = useContext(CommentsContext);

    const changeValue = (e) => {
        setComment(e.target.value);
    }
    const handleSubmit = () => {
        newComment(ticketID, comment);
        // .then(data => {
        //     console.log(data);
        // })
        // .then(() => setRerender(!rerender));
        setRerender(!rerender);
        setComment('');
    }

    return (
        <div>
            <br></br>
        <TextField
          id="outlined-multiline-flexible"
          label="Neuer Kommentar"
          multiline
          rows={4}
          variant="outlined"
          onChange={changeValue}
          value={comment}
        />
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={handleSubmit}
      >
        Save
      </Button>
        </div>
    )
}

export default NewComment
