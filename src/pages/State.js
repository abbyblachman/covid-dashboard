import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import LineChart from '../components/LineChart';
import {Link} from 'react-router-dom'
import MediaQuery from 'react-responsive'
import moment from 'moment'

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
    if (state) {
        getData();
    }
    if (state === 'undefined') {
        setState('')
    }
    
}, [])

function onClick(event) {
    window.location.href = `/${event.target.value}`
}
   


    function getData() {
        Axios
        .get(`https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?state=${state}`)
        .then(res => {
            if (res.data.length === 0) {
                setILPositive('');
            setILNegative('')
            setStateYesterday('')
            setTotal('')
            setTotalYesterday('')
            res.data.reverse();
            setTests('')
            setPositive('')
            setDate('')
            }
            else {
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
                    let newDate = moment(`${data.date}`).format('MMMM Do')
                    setDate(date => [...date, newDate])
                })
                
            }
            
        })
    }

    const styleLine = {
        maxWidth: '100%', 
        maxHeight: '100%',
        position: 'relative'
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

    const totalSpan = {
        display: 'inline block', 
        marginTop: '1rem', 
        padding: '0.2rem',
        border: '1px solid',
        borderRadius: '5%',
        color: 'white',
        backgroundColor: '#FFAA00'
    }

    const positiveSpan = {
        display: 'inline block', 
        margin: '1rem', 
        padding: '0.2rem',
        border: '1px solid',
        borderRadius: '5%',
        color: 'white',
        backgroundColor: 'black'
    }
    
    const buttonParent = {
        textAlign: 'center'
    }

    const spanParent = {
        textAlign: 'center', 
        marginTop: '1rem'
    }

    const titleSpan = {
        textAlign: 'left', 
        fontSize: '2rem', 
        fontFamily: 'Bree Serif', 
    }

    const subHead = {
        fontFamily: 'Helvetica', 
        marginTop: '0.5rem', 
        fontSize: '0.8rem'
    }

    const text = {
        marginTop: '1rem'
    }
    const formSpanLarge = {
        fontSize: '1.5rem', 
        fontFamily: 'Bree Serif'
    }


    return(
        <div style={style}>
        <div style={buttonParent}><Link to={`/`}><button style={button}>Home</button></Link></div>
        <div style={titleSpan}>COVID-19 in {state}</div>
        <div style={subHead}>Data updates daily at 4:00 p.m. EST.</div>
        <br></br>
        <form className="form" action="#">
            <span style={formSpanLarge}>Choose your state: </span>
            <select value={state} id="state" name="state" onChange={onClick}>
            <option value="Choose">State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
            
            </select>
                </form>
        <div>
        <div style={styleLine}>
        <LineChart tests={tests} positive={positive} date={date}></LineChart>
        </div>
        </div>
        <div style={spanParent}><span style={totalSpan}><strong>Total tests</strong></span><span style={positiveSpan}><strong>Positive tests</strong></span></div>
        <div style={text}>
               <div ><strong>{iLPositive}</strong> people have tested positive for COVID-19 in {state}. That's {iLPositive - stateYesterday} more than yesterday.</div>
               <div ><strong>{ilNegative}</strong> people have tested negative for COVID-19 in {state}. </div>
                <div><strong>{total} </strong>people have been tested in {state} so far. That's {total - totalYesterday} more people than yesterday.</div>

               </div>
        </div>
    )

}

export default State;