import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
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
// console.log(startdate)

useEffect(() => {
    getData();
}, []) 
    


function getData() {
axios
.get(`https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?date=${now}`)
.then(res => {
    res.data.forEach(data => {
        arr.push({
            state: data.state,
            positive: data.positive, 
            total: data.total})
    })
    arr.sort(function(a, b){ return b.positive - a.positive});
    setPositive(arr);
})
    .then(() => {
        if (arr.length === 0) {  
            axios
            .get(`https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?date=${startdate}`)
            .then(res => {
                res.data.forEach(data => {
                    arr.push({
                        state: data.state,
                        positive: data.positive,
                        total: data.total})
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

const a = {
    textDecorationg: 'underline', 
    color: 'black'
}



return(
    <div style={style}>
        {/* {console.log(stateOne)} */}
        <div style={span}>States with the most positive tests so far:</div>
        <div><Link to={`/${stateOne.state}`}><strong style={a}>{stateOne.state}</strong></Link>: {stateOne.positive} cases. {stateOne.total} tests administered.</div>
        <div><Link to={`/${stateTwo.state}`}><strong style={a}>{stateTwo.state}</strong></Link>: {stateTwo.positive} cases. {stateTwo.total} tests administered.</div>
        <div><Link to={`/${stateThree.state}`}><strong style={a}>{stateThree.state}</strong></Link>: {stateThree.positive} cases. {stateThree.total} tests administered.</div>
        <div><Link to={`/${stateFour.state}`}><strong style={a}>{stateFour.state}</strong></Link>: {stateFour.positive} cases. {stateFour.total} tests administered.</div>
        <div><Link to={`/${stateFive.state}`}><strong style={a}>{stateFive.state}</strong></Link>: {stateFive.positive} cases. {stateFive.total} tests administered.</div>
    </div>
    )
}

export default Leaders;