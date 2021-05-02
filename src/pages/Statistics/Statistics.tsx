import React from 'react'
import NewElementButton from '../../components/Button/NewTicketButton'
import TicketsZeitverlauf from '../../components/Charts/TicketsZeitverlauf';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TicketsNachModulen from '../../components/Charts/TicketsNachModulen';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        textTransform: 'none'
      },
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
      root: {
          display: 'flex',
      }
    }),
  );


function Statistics() {
    const classes = useStyles();

    return (
        <div>
            <Typography align='center' gutterBottom variant="h5" component="h2" color="primary">
                Anzahl erstellter Tickets im Zeitverlauf
            </Typography>
            <TicketsZeitverlauf/>
            <Typography align='center' gutterBottom variant="h5" component="h2" color="primary">
                Gesamtzahl erstellter Tickets pro Modul
            </Typography>
            <NewElementButton/>
            <TicketsNachModulen/>
        </div>
    )
}

export default Statistics
