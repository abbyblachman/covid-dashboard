import React from 'react';
import {Line} from 'react-chartjs-2';



export default class App extends React.Component {
  render() {

    const tests = this.props.tests;
    // console.log(tests)
    const positive = this.props.positive;
    // console.log(positive)
    const date = this.props.date;
    console.log(date)

    const state = {
        labels: date,
        datasets: [ 
          {
              label: 'Total tests',
              fill: false,
              lineTension: 0.5,
              backgroundColor: 'rgba(255,255,255,1)',
              borderColor: 'rgba(255,255,255,1)',
              borderWidth: 2,
              data: tests
          }, 
          {
            label: 'Positive tests',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(0,0,0,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: positive
          },
        ]
      }



    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              fontSize:20
            },
            legend:{
              display: false,
            }
          }}
        />
      </div>
    );
  }
}