import { useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

// Style definition 
const useStyles = makeStyles((theme: Theme) =>
createStyles({
        fab: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            textTransform: 'none'
        },
    }),
);


export default function NewTicketButton() {


const classes = useStyles();
const history = useHistory();

// Method for pressing the Create-New-Ticket Button
  const handleCreateNewTicket = () => {
    history.push('/newTicket');
  };


    return (
        <Fab variant="extended" size="medium" color="secondary" className={classes.fab} onClick={handleCreateNewTicket}>
        <AddIcon />
        &nbsp; Neues Ticket
      </Fab>
    );

}