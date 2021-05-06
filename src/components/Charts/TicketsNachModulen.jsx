import React, {useState, useEffect} from 'react'
import { Pie,Bar } from 'react-chartjs-2';
import {getTicketsNachModulen} from '../../util/ApiCalls';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) =>
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
  container: {
    width: '50',
    height: '200'
  }
}),
);


  function TicketsNachModulen() {

    const [labels, setLabels] = useState([]);
    const [openTickets, setOpenTickets] = useState([]);
    const [closedTickets, setClosedTickets] = useState([]);

    
    const classes = useStyles();

    useEffect(async() => {
      let labels=[];
      let openTickets=[];
      let closedTickets=[];

      const result = await getTicketsNachModulen();
      console.log(result);
      result.forEach(element => {
        labels.push(element.modulName.split(' - ')[0]);
        openTickets.push(element.openTickets);
        closedTickets.push(element.closedTickets);
      });
      setLabels(labels);
      setClosedTickets(closedTickets);
      setOpenTickets(openTickets);

      console.log(labels);
      console.log(openTickets);
      console.log(closedTickets);
    },[])
    
    const dataOpen = {
      labels: labels,
      datasets: [
        {
          data: openTickets,
          backgroundColor: 'rgba(234, 91, 15, 1)',
          borderColor: 'rgba(234, 91, 15, 1)',
          fill: false,
        },
      ],
    };
    const dataClosed = {
        labels: labels,
        datasets: [
          {
            data: closedTickets,
            backgroundColor: 'rgba(17, 52, 64, 1)',
            borderColor: 'rgba(17, 52, 64, 1)',
            fill: false,
          },
        ],
      };
    
    const options = {
      plugins: {
        legend: {
          display: false,
        },
      }
    }

    return (
      <div>
      {/* <article height='60vh'> */}
      <Grid container justify="flex-start" alignItems="flex-start" spacing={3}>
      <Grid item xs={'auto'}>
      <Typography align='center' gutterBottom variant="h6" component="h2" color="primary">
                Offene Tickets
    </Typography>
      {/*<canvas id="middle" width='800' height='40'></canvas>*/}
      <Bar data={dataOpen} options={options}/>
      </Grid>
      <Grid item xs={'auto'}>
      <Typography align='center' gutterBottom variant="h6" component="h2" color="primary">
            Geschlossene Tickets
    </Typography>
      {/*<canvas id="middle" width='800' height='40'></canvas>*/}
      <Bar data={dataClosed} options={options}/>
      </Grid>
      {/* </article> */}
      </Grid>
      </div>
    );
  } 
    


export default TicketsNachModulen