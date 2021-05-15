import React, {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import {getTicketsImZeitverlauf} from '../../util/ApiCalls';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// Style definition
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

    // Necessary consts
    const [labels, setLabels] = useState([]);
    const [openTickets, setOpenTickets] = useState([]);
    const [closedTickets, setClosedTickets] = useState([]);

    const classes = useStyles();

    useEffect(async() => {
      let labels=[];
      let openTickets=[];
      let closedTickets=[];

      const result = await getTicketsImZeitverlauf();

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
    
    // Diagram data
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'geöffnete Tickets',
          data: openTickets,
          backgroundColor: 'rgba(234, 91, 15, 1)',
          borderColor: 'rgba(234, 91, 15, 1)',
          fill: false,
        },
        {
          label: 'geschlossene Tickets',
          data: closedTickets,
          backgroundColor: 'rgba(17, 52, 64, 1)',
          borderColor: 'rgba(17, 52, 64, 1)',
          fill: false,
        },
      ],
    };
    
    // Display options of the diagram
    const options = {
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
      <Line data={data} options={options} />
      </div>
    );
  } 
    
export default TicketsZeitverlauf