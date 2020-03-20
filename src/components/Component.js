import React, {useState, useEffect} from 'react';
import Axios from 'axios';
// import Totals from '../components/Totals';
import { relativeTimeRounding } from 'moment';



function Component () {
const [data, setData] = useState([]);
const [iLPositive, setILPositive] = useState(0);
const [ilNegative, setILNegative] = useState(0);
const [state, setState] = useState();




// useEffect(() => {
//     getData();
// }, )

// setNumbers();

function getData(event) {
    let state = event.target.value;
    event.preventDefault();
    Axios
    .get(`https://covidtracking.com/api/states/daily?state=${state}`)
    .then(res => 
        {
            // console.log(res.data)
        if (res.data !== null) {
        setData(res.data);
        setILPositive(res.data[0].positive);
        setILNegative(res.data[0].negative)
        }
        else {
            alert('No data available at this time')
        }
        
        })      
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
    textAlign: 'center', 
    fontFamily: 'Bree Serif'
}

const formSpan = {
    fontSize: '1.5rem'
}

const titleSpan = {
    textAlign: 'center', 
    fontSize: '2rem', 
    fontFamily: 'Bree Serif', 
    marginBottom: '1.5rem'
}


        return (
            <div style={styleDiv}>
            <div style={form}>
            <strong><div style={titleSpan}>COVID-19 BY STATE</div></strong>
            <form className="form" action="#">
            <span style={formSpan}>Choose your state: </span>
            <select value={state} id="state" name="state" onChange={getData}>
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
                </div>
        
                <div>
               <div ><strong>{iLPositive}</strong> people have tested positive for COVID-19 in this state.</div>
               <div ><strong>{ilNegative}</strong> people have tested negative for COVID-19 in this state.</div>
               </div>
            
            {/* <Totals data={data}></Totals> */}
            </div>
            
        )

}

export default Component; 