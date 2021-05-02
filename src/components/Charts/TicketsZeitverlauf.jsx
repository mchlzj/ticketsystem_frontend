
import React, {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import {getTicketsImZeitverlauf} from '../../util/ApiCalls';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';



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


  function TicketsZeitverlauf() {

    const [labels, setLabels] = useState([]);
    const [openTickets, setOpenTickets] = useState([]);
    const [closedTickets, setClosedTickets] = useState([]);

    
    const classes = useStyles();

    useEffect(async() => {
      let labels=[];
      let openTickets=[];
      let closedTickets=[];

      const result = await getTicketsImZeitverlauf();
      // console.log(result);
      result.forEach(element => {
        labels.push(element.month);
        openTickets.push(element.openedTickets);
        closedTickets.push(element.closedTickets);
      });
      setLabels(labels);
      setClosedTickets(closedTickets);
      setOpenTickets(openTickets);

      console.log(labels);
      console.log(openTickets);
      console.log(closedTickets);
    },[])
    
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'geöffnete Tickets',
          data: openTickets,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
        },
        {
          label: 'geschlossene Tickets',
          data: closedTickets,
          backgroundColor: 'rgb(54, 162, 235)',
          borderColor: 'rgba(54, 162, 235, 0.2)',
          fill: false,
        },
      ],
    };
    
    const options = {
      // responsive: true,
      // maintainAspectRatio: false,
      pugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Anzahl der erstellten Tickets im Zeitverlauf'
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };


    return (
      <div >
        
      <canvas id="top" width='800' height='20'></canvas>
      {/* <article height='60vh'> */}
      <Line data={data} options={options} />
      {/* </article> */}
      <canvas id="middle" width='800' height='40'></canvas>
      </div>
    );
  } 
    


export default TicketsZeitverlauf
