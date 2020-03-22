import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import LineChart from '../components/LineChart';
import {Link} from 'react-router-dom'
import MediaQuery from 'react-responsive'

function State() {
    const [state, setState] = useState(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
    const [tests, setTests] = useState([]);
    const [positive, setPositive] = useState([]);
    const [date, setDate] = useState([]);
    const [iLPositive, setILPositive] = useState(0);
    const [ilNegative, setILNegative] = useState(0);
    const [stateYesterday, setStateYesterday] = useState(0);
    const [total, setTotal] = useState(0);
    const [totalYesterday, setTotalYesterday] = useState(0);


useEffect(() => {
    getData();
}, [])
   


    function getData() {
        Axios
        .get(`https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?state=${state}`)
        .then(res => {
            setILPositive(res.data[0].positive);
            setILNegative(res.data[0].negative)
            setStateYesterday(res.data[1].positive)
            setTotal(res.data[0].total)
            setTotalYesterday(res.data[1].total)
            res.data.reverse();
            // console.log(res.data)
            res.data.forEach(data => {
                setTests(tests => [...tests, data.total])
            })
            res.data.forEach(data => {
                setPositive(positive => [...positive, data.positive])
            })
            res.data.forEach(data => {
                setDate(date => [...date, data.date])
            })
        })
    }

    const styleLine = {
        width: '30rem', 
        height: '16rem', 
    }
    const style = {
        paddingBottom: '5rem', 
        marginLeft: 'auto', 
        marginRight: 'auto',
        marginTop: '3rem',
        width: '23rem', 
        fontSize: '1rem', 
        // paddingLeft: '10rem', 
        // paddingRight: '10rem'
    }

    const button = {
        display: 'inline block', 
        marginTop: '0.5rem', 
        border: '1px solid',
        borderRadius: '5%',
        backgroundColor: '#f7cf7e'
    }
    
    const buttonParent = {
        textAlign: 'center'
    }

    const titleSpan = {
        textAlign: 'left', 
        fontSize: '2rem', 
        fontFamily: 'Bree Serif', 
    }

    const subHead = {
        fontFamily: 'Helvetica', 
        marginTop: '0.5rem'
    }

    const text = {
        marginTop: '1rem'
    }


    return(
        <div style={style}>
        <div style={titleSpan}>COVID-19 in {state}</div>
        <div style={subHead}>Data updates daily at 4:00 p.m. EST.</div>
        <div style={buttonParent}><Link to="/"><button style={button}>Home</button></Link></div>
        <div style={styleLine}>
        <LineChart tests={tests} positive={positive} date={date}></LineChart>
        </div>
        <div style={text}>
               <div ><strong>{iLPositive}</strong> people have tested positive for COVID-19 in {state}. That's {iLPositive - stateYesterday} more than yesterday.</div>
               <div ><strong>{ilNegative}</strong> people have tested negative for COVID-19 in {state}. </div>
                <div><strong>{total} </strong>people have been tested in {state} so far. That's {total - totalYesterday} more people than yesterday.</div>

               </div>
        </div>
    )

}

export default State;