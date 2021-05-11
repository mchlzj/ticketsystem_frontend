import React, {useEffect, useState} from 'react'
import NewElementButton from '../../components/Button/NewTicketButton'
import TicketsZeitverlauf from '../../components/Charts/TicketsZeitverlauf';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TicketsNachModulen from '../../components/Charts/TicketsNachModulen';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getAllTickets} from '../../util/ApiCalls';

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


function Statistics(
  {tickets, setTickets}
  ) {

    const classes = useStyles();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // getAllTickets()
      // .then(data => {
      //   setTickets(data);
      //   console.log(data);
      // })
      // .then(() => setIsLoading(false))
      setTickets([]);
      setIsLoading(false);
      console.log("Api Call from MyTickets");
  }, [])


    return (
        <div>
          <Grid container justify="flex-start" alignItems="flex-start" spacing={3}>
            <Grid item xs={'auto'}>
            <Typography align='center' gutterBottom variant="h5" component="h2" color="primary">
                Anzahl erstellter Tickets im Zeitverlauf
            </Typography>
            <TicketsZeitverlauf/>
            </Grid>
            <Grid item xs={12} />
            <Grid item xs={'auto'}>
            <Typography align='center' gutterBottom variant="h5" component="h2" color="primary">
                Gesamtzahl erstellter Tickets pro Modul
            </Typography>
            <NewElementButton/>
            <TicketsNachModulen/>
            </Grid>
          </Grid>
          <Backdrop className={classes.backdrop} open={isLoading} transitionDuration={300}>
        <CircularProgress color="inherit" />
      </Backdrop>
        </div>
    )
}

export default Statistics
