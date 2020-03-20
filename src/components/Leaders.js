import React, {useState, useEffect} from 'react';
import moment from 'moment';
import axios from 'axios';

function Leaders() {
const [positive, setPositive] = useState([]);
const [stateOne, setStateOne] = useState([]);
const [stateTwo, setStateTwo] = useState([]);
const [stateThree, setStateThree] = useState([]);
const [stateFour, setStateFour] = useState([]);
const [stateFive, setStateFive] = useState([]);
const arr = [];

let now = moment().format('YYYYMMDD');
let startdate = moment().subtract(1, "days").format("YYYYMMDD");
console.log(startdate)

useEffect(() => {
    getData();
}, []) 
    


function getData() {
axios
.get(`https://covidtracking.com/api/states/daily?date=${now}`)
.then(res => {
    res.data.forEach(data => {
        arr.push({
            state: data.state,
            positive: data.positive})
    })
    arr.sort(function(a, b){ return b.positive - a.positive});
    setPositive(arr);
})
    .then(() => {
        if (arr.length === 0) {  
            axios
            .get(`https://covidtracking.com/api/states/daily?date=${startdate}`)
            .then(res => {
                res.data.forEach(data => {
                    arr.push({
                        state: data.state,
                        positive: data.positive})
                })
                arr.sort(function(a, b){ return b.positive - a.positive});
                setPositive(arr);
            })
            .then(() => {
                setStateOne(arr[0])
                setStateTwo(arr[1])
                setStateThree(arr[2])
                setStateFour(arr[3])
                setStateFive(arr[4])
            })
           
        }
        else {
            setStateOne(arr[0])
            setStateTwo(arr[1])
            setStateThree(arr[2])
            setStateFour(arr[3])
            setStateFive(arr[4]) 
        }
    
    })
}

const style = {
    // marginLeft: 'auto', 
    // marginRight: 'auto', 
  
}

const span = {
    fontSize: '1.5rem', 
    paddingTop: '1.5rem', 
    paddingBottom: '1.5rem', 
    fontFamily: 'Bree Serif'
}



return(
    <div style={style}>
        <div style={span}>States with the most positive tests so far:</div>
        <div><strong>{stateOne.state}</strong>: {stateOne.positive} cases</div>
        <div><strong>{stateTwo.state}</strong>: {stateTwo.positive} cases</div>
        <div><strong>{stateThree.state}</strong>: {stateThree.positive} cases</div>
        <div><strong>{stateFour.state}</strong>: {stateFour.positive} cases</div>
        <div><strong>{stateFive.state}</strong>: {stateFive.positive} cases</div>
    </div>
    )
}

export default Leaders;