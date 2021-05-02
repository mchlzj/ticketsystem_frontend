import React, {useState, useEffect} from 'react'
import { Pie } from 'react-chartjs-2';
import {getTicketsNachModulen} from '../../util/ApiCalls';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



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
      // console.log(result);
      result.forEach(element => {
        labels.push(element.modulName);
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
          label: 'geöffnete Tickets',
          data: openTickets,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          fill: false,
        },
      ],
    };
    const dataClosed = {
        labels: labels,
        datasets: [
          {
            label: 'geöffnete Tickets',
            data: openTickets,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            fill: false,
          },
        ],
      };

    return (
      <div>
      {/* <article height='60vh'> */}
      <Typography align='center' gutterBottom variant="h6" component="h2" color="primary">
                Offene Tickets
    </Typography>
      <canvas id="middle" width='800' height='40'></canvas>
      <Pie data={dataOpen}/>
      <Typography align='center' gutterBottom variant="h6" component="h2" color="primary">
            Geschlossene Tickets
    </Typography>
      <canvas id="middle" width='800' height='40'></canvas>
      <Pie data={dataClosed}/>
      {/* </article> */}
      
      </div>
    );
  } 
    


export default TicketsNachModulen