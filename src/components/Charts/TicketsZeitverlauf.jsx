
import {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import {getTicketsImZeitverlauf} from '../../util/ApiCalls';

  /*
  .jsx Komponente, da Charts-js Probleme mit Typscript hat
  */
  function TicketsZeitverlauf() {

    const [labels, setLabels] = useState([]);
    const [openTickets, setOpenTickets] = useState([]);
    const [closedTickets, setClosedTickets] = useState([]);

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
