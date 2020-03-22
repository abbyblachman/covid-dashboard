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
    if (state) {
        getData();
    }
    else {
        window.location.href = '/'
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
                    setDate(date => [...date, data.date])
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
        color: 'black',
        backgroundColor: '#FFAA00'
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
        marginTop: '0.5rem'
    }

    const text = {
        marginTop: '1rem'
    }
    const formSpanLarge = {
        fontSize: '1.5rem'
    }


    return(
        <div style={style}>
        <div style={titleSpan}>COVID-19 in {state}</div>
        <div style={subHead}>Data updates daily at 4:00 p.m. EST.</div>
        <form className="form" action="#">
            <span style={formSpanLarge}>Choose your state: </span>
            <select value={state} id="state" name="state" onChange={onClick}>
            <option value="Choose">State</option>
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="DC">DC</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
            
            </select>
                </form>
        <div style={buttonParent}><Link to={`/`}><button style={button}>Home</button></Link></div>
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