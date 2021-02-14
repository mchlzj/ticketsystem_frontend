import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {sendData} from './ApiCalls';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    title: {
        width: '50ch'
    },
    description: {
        width: '150ch',
    }
  }),
);

export default function NewTicket() {
    const classes = useStyles();

    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');

    const handleChangeDescription = ({target}) => {
        setDescriptionValue(target.value);
    };
    const handleChangeTitle = ({target}) => {
        setTitleValue(target.value);
    };
    const submitTicket = () => {
        console.log("i got clicked");
        sendData(titleValue,descriptionValue).then(success => alert('Neues Ticket erfolgreich erstellt!'));

    };
    
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField 
        className={classes.title} 
        id="filled-basic" 
        label="Titel" 
        variant="filled"
        value={titleValue}
        onChange={handleChangeTitle} />
        <TextField
            className={classes.description}
          id="filled-multiline-flexible"
          label="Beschreibung"
          multiline
          rowsMax={20}
          value={descriptionValue}
          onChange={handleChangeDescription}
          variant="filled"
        />
        <Button 
        variant="contained" 
        color="primary"
        onClick={submitTicket}>
        Neues Ticket erstellen!
      </Button>
      </form>
    );
}


