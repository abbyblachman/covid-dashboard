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
const [usaPostive, setUSAPositive] = useState(0);
const [usaTotal, setUSATotal] = useState(0);

function USA () {
axios
    .get(`https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/us`)
    .then(res => {
        // console.log(res.data)
        setUSAPositive(res.data[0].positive)
        setUSATotal(res.data[0].total)
    })
}

let now = moment().format('YYYYMMDD');
let startdate = moment().subtract(1, "days").format("YYYYMMDD");
// console.log(startdate)

useEffect(() => {
    getData();
    USA();
}, []) 
    


function getData() {
axios
.get(`https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?date=${now}`)
.then(res => {
    // console.log('in the then')
    if (res.data.error === true) {
        // console.log(res.data)
        axios
            .get(`https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?date=${startdate}`)
            .then(res => {
                // console.log('in the if')
                console.log(res.data.length)
                res.data.forEach(data => {
                    arr.push({
                        state: data.state,
                        positive: data.positive,
                        total: data.total})
                })
                arr.sort(function(a, b){ return b.positive - a.positive});
                setStateOne(arr[0])
                setStateTwo(arr[1])
                setStateThree(arr[2])
                setStateFour(arr[3])
                setStateFive(arr[4])
                // console.log(arr)
            })
    } else if (res.data.length > 50) {
                res.data.forEach(data => {
                        arr.push({
                            state: data.state,
                            positive: data.positive, 
                            total: data.total})
            })
            arr.sort(function(a, b){ return b.positive - a.positive});
            setStateOne(arr[0])
            setStateTwo(arr[1])
            setStateThree(arr[2])
            setStateFour(arr[3])
            setStateFive(arr[4])
        }
        })        // console.log(arr)
    }   

            // .then(() => {
            //     setStateOne(arr[0])
            //     setStateTwo(arr[1])
            //     setStateThree(arr[2])
            //     setStateFour(arr[3])
            //     setStateFive(arr[4])
            // })
           

      
    



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

const subHeadSmall = {
    fontFamily: 'Helvetica', 
    marginTop: '2rem', 
    fontSize: '0.5rem'
}

// console.log(stateOne)
// console.log(stateTwo)

return(
    <div style={style}>
        {console.log(stateOne)}
        {console.log(stateOne)}
        <div style={span}>States with the most positive tests so far:</div>
         <div><Link to={`/${stateOne.state}`}><strong style={a}>{stateOne.state}</strong></Link>: {stateOne.positive} cases statewide. {Math.floor((stateOne.positive/usaPostive)*100)}% of cases nationwide are in this state.</div>
        <div><Link to={`/${stateTwo.state}`}><strong style={a}>{stateTwo.state}</strong></Link>: {stateTwo.positive} cases statewide. {Math.floor((stateTwo.positive/usaPostive)*100)}% of cases nationwide are in this state.</div>
        <div><Link to={`/${stateThree.state}`}><strong style={a}>{stateThree.state}</strong></Link>: {stateThree.positive} cases statewide. {Math.floor((stateThree.positive/usaPostive)*100)}% of cases nationwide are in this state.</div>
        <div><Link to={`/${stateFour.state}`}><strong style={a}>{stateFour.state}</strong></Link>: {stateFour.positive} cases statewide. {Math.floor((stateFour.positive/usaPostive)*100)}% of cases nationwide are in this state.</div>
         <div><Link to={`/${stateFive.state}`}><strong style={a}>{stateFive.state}</strong></Link>: {stateFive.positive} cases statewide. {Math.floor((stateFive.positive/usaPostive)*100)}% of cases nationwide are in this state.</div>
        <div style={subHeadSmall}>Built w/ ❤️ by Abby Blachman and Hannah Chamorro. View the <a href="https://github.com/abbyblachman/covid-dashboard">source code</a> on GitHub.</div>
    </div>
    )
}

export default Leaders;