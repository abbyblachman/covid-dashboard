import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
// import Totals from '../components/Totals';
import { relativeTimeRounding } from 'moment';
import MediaQuery from 'react-responsive'




function Component () {
const [data, setData] = useState([]);
const [iLPositive, setILPositive] = useState(0);
const [ilNegative, setILNegative] = useState(0);
const [state, setState] = useState();
const [stateYesterday, setStateYesterday] = useState(0);
const [total, setTotal] = useState(0);
const [totalYesterday, setTotalYesterday] = useState(0);
const [usaPostive, setUSAPositive] = useState(0);
const [usaTotal, setUSATotal] = useState(0);


function USA () {
    Axios
        .get(`https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/us`)
        .then(res => {
            setUSAPositive(res.data[0].positive)
            setUSATotal(res.data[0].total)
        })
}
        


useEffect(() => {
    USA();
},[] )

// setNumbers();
function onClick (event) {
    getData(event);
    
}

function getData(event) {
    let state = event.target.value;
    setState(state)
    Axios
    .get(`https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?state=${state}`)
    .then(res => 
        {
            // console.log(res.data)
        if (res.data !== null) {
        setData(res.data);
        setILPositive(res.data[0].positive);
        setILNegative(res.data[0].negative)
        setStateYesterday(res.data[1].positive)
        setTotal(res.data[0].total)
        setTotalYesterday(res.data[1].total)
        }
        else {
            alert('No data available at this time')
        }
        
        })
    // .then(() => {
    //         Axios
    //         .get(`https://covidtracking.com/api/states/daily?state= this state`) 
    //         .then(res => {
    //             setStateToday(res.data[0])
    //             console.log(stateToday)
    //             // const today = res.data[0].positive
    //             // console.log(today)
    //         })
        
    // })    
}


const styleDiv = {
    // marginLeft: 'auto', 
    // marginRight: 'auto', 
    // marginTop: '8rem',
    // width: '40rem', 
    // fontSize: '1rem', 
    // paddingLeft: '10rem', 
    // paddingRight: '10rem'
}

const form = {
    paddingBottom: '1.5rem', 
    textAlign: 'left', 
    fontFamily: 'Bree Serif'
}

const formSpan = {
    fontSize: '1.5rem'
}

const titleSpan = {
    textAlign: 'left', 
    fontSize: '2rem', 
    fontFamily: 'Bree Serif', 
    marginBottom: '1rem'
}

const subHead = {
    fontFamily: 'Helvetica', 
    marginTop: '0.5rem'
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

const formLarge = {
    paddingBottom: '1.5rem', 
    textAlign: 'left', 
    fontFamily: 'Bree Serif'
}

const formSpanLarge = {
    fontSize: '1.5rem'
}

const titleSpanLarge = {
    textAlign: 'left', 
    fontSize: '2rem', 
    fontFamily: 'Bree Serif', 
    marginBottom: '1rem'
}

const subHeadLarge = {
    fontFamily: 'Helvetica', 
    marginTop: '0.5rem'
}



        return (
            <>
            <MediaQuery maxDeviceWidth={1223} device={{ deviceWidth: 1599 }}>
            <div style={styleDiv}>
            <div style={form}>
            <strong><div style={titleSpan}>COVID-19 BY STATE</div></strong>
            <USA/>
            <form className="form" action="#">
            <span style={formSpan}>Choose your state: </span>
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
                <div style={subHead}>Data updates daily at 4:00 p.m. EST.</div>
                </div>

                <div>{usaPostive} people have tested positive for COVID-19 in the United States. {usaTotal} have been tested.</div>
                <div>
               <div ><strong>{iLPositive}</strong> people have tested positive for COVID-19 in {state}. That's {iLPositive - stateYesterday} more than yesterday.</div>
               <div ><strong>{ilNegative}</strong> people have tested negative for COVID-19 in {state}. </div>
                <div><strong>{total} </strong>people have been tested in {state} so far. That's {total - totalYesterday} more people than yesterday.</div>
                <div style={buttonParent}><Link to={`/${state}`}><button style={button}>{state}: see more</button></Link></div>

               </div>
            {/* <Totals data={data}></Totals> */}
            </div>
            </MediaQuery> 
            <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
                <div style={styleDiv}>
            <div style={formLarge}>
            <strong><div style={titleSpanLarge}>COVID-19 BY STATE</div></strong>
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
                <div style={subHeadLarge}>Data updates daily at 4:00 p.m. EST.</div>
                </div>
        
                <div><strong>{usaPostive}</strong> people have tested positive for COVID-19 in the United States. {usaTotal} have been tested.</div>
                <div>
                    <br></br>
               <div ><strong>{iLPositive}</strong> people have tested positive for COVID-19 in {state}. That's {iLPositive - stateYesterday} more than yesterday.</div>
               <div ><strong>{ilNegative}</strong> people have tested negative for COVID-19 in {state}. </div>
                <div><strong>{total} </strong>people have been tested in {state}so far. That's {total - totalYesterday} more people than yesterday.</div>
                <div style={buttonParent}><Link to={`/${state}`}><button style={button}>{state}: see more</button></Link></div>
                
               </div>
            {/* <Totals data={data}></Totals> */}
            </div>
            </MediaQuery>
            </>
            
        )

}

export default Component; 