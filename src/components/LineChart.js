import React from 'react';
import {Line} from 'react-chartjs-2';



export default class App extends React.Component {
  render() {

    const testLength = this.props.tests.length;
    const tests = (this.props.tests).slice(testLength - 8, testLength);
    // console.log(tests)
    const positiveLength = this.props.positive.length;
    const positive = (this.props.positive).slice(positiveLength - 8, positiveLength);
    // console.log(positive)
    const dateLength = this.props.date.length;
    const date = (this.props.date).slice(dateLength - 8, dateLength);
    // console.log(date)

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