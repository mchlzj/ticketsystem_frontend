import React, {useEffect} from 'react'
import { Bar } from 'react-chartjs-2';
import {getAllTickets} from '../../util/ApiCalls';




  
  function TicketsZeitverlauf() {

    let labels=[];
    let openTickets;
    let closedTickets;

    useEffect(async() => {
      const rawData = await getAllTickets();
      const sortedData = [];
      //generating labels
      for (let i = 0; i < rawData.length; i ++) {
        const dateString = Date.parse(rawData[i].createdDate);
        const date = new Date(dateString);
        labels.push(date.getMonth()+1);
        console.log(labels);

      }
      // console.log(rawData);
    })
    
    const data = {
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [
        {
          label: '# of Red Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: '# of Blue Votes',
          data: [2, 3, 20, 5, 1, 4],
          backgroundColor: 'rgb(54, 162, 235)',
        },
        {
          label: '# of Green Votes',
          data: [3, 10, 13, 15, 22, 30],
          backgroundColor: 'rgb(75, 192, 192)',
        },
      ],
    };
    
    const options = {
      scales: {
        yAxes: [
          {
            stacked: true,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            stacked: true,
          },
        ],
      },
    };

    return (
        <>
      <div className='header'>
        <h1 className='title'>Stacked Bar Chart</h1>
        <div className='links'>
          <a
            className='btn btn-gh'
            href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/StackedBar.js'
          >
            Github Source
          </a>
        </div>
      </div>
      <Bar data={data} options={options} />
    </>
    );
  } 
    


export default TicketsZeitverlauf
