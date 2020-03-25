import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
// import Totals from '../components/Totals';
import { relativeTimeRounding } from 'moment';
import MediaQuery from 'react-responsive';
import { USADataContext } from '../utils/USAData';

function Component() {
  const [data, setData] = useState(false);
  const [iLPositive, setILPositive] = useState(0);
  const [ilNegative, setILNegative] = useState(0);
  const [state, setState] = useState();
  const [stateYesterday, setStateYesterday] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalYesterday, setTotalYesterday] = useState(0);
  const [usaPostive, setUSAPositive] = useState(0);
  const [usaTotal, setUSATotal] = useState(0);
  const [date, setDate] = useState();
  const [pending, setPending] = useState('NaN');

  const [USAData, setUSAData] = useContext(USADataContext);

  function USA() {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/us`
    ).then(res => {
      // console.log(res.data)
      setUSAPositive(res.data[0].positive);
      setUSATotal(res.data[0].total);
    });
  }

  useEffect(() => {
    newYork();
    USA();
  }, []);

  // setNumbers();
  function onClick(event) {
    getData(event);
  }

  function getData(event) {
    let state = event.target.value;
    setState(state);
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?state=${state}`
    ).then(res => {
      console.log(res.data);
      if (res.data.length !== 0) {
        // console.log(res.data)
        setData(res.data);
        if (res.data[0].pending) {
          setPending(res.data[0].pending);
        }
        setILPositive(res.data[0].positive);
        setILNegative(res.data[0].negative);
        setStateYesterday(res.data[1].positive);
        setTotal(res.data[0].total);
        setTotalYesterday(res.data[1].total);
      } else {
        setData('');
        setILPositive('');
        setILNegative('');
        setStateYesterday('');
        setTotal('');
        setTotalYesterday('');
      }
    });
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

  function newYork() {
    let state = 'NY';
    setState(state);
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?state=${state}`
    ).then(res => {
      console.log(res.data);
      if (res.data.length !== 0) {
        // console.log(res.data)
        setData(res.data);
        if (res.data[0].pending) {
          setPending(res.data[0].pending);
        }
        setILPositive(res.data[0].positive);
        setILNegative(res.data[0].negative);
        setStateYesterday(res.data[1].positive);
        setTotal(res.data[0].total);
        setTotalYesterday(res.data[1].total);
      } else {
        setData('');
        setILPositive('');
        setILNegative('');
        setStateYesterday('');
        setTotal('');
        setTotalYesterday('');
      }
    });
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
  };

  const form = {
    paddingBottom: '1.5rem',
    textAlign: 'left',
    fontFamily: 'Bree Serif'
  };

  const formSpan = {
    fontSize: '1.5rem'
  };

  const titleSpan = {
    textAlign: 'left',
    fontSize: '2rem',
    fontFamily: 'Bree Serif',
    marginBottom: '1rem'
  };

  const subHead = {
    fontFamily: 'Helvetica',
    marginTop: '0.5rem'
  };

  const subHeadSmall = {
    fontFamily: 'Helvetica',
    marginTop: '0.5rem',
    fontFamily: '0.8rem'
  };

  const button = {
    display: 'inline block',
    marginTop: '0.5rem',
    border: '1px solid',
    borderRadius: '5%',
    backgroundColor: '#f7cf7e'
  };

  const buttonParent = {
    textAlign: 'center'
  };

  const formLarge = {
    paddingBottom: '1.5rem',
    textAlign: 'left',
    fontFamily: 'Bree Serif'
  };

  const formSpanLarge = {
    fontSize: '1.5rem'
  };

  const titleSpanLarge = {
    textAlign: 'left',
    fontSize: '2rem',
    fontFamily: 'Bree Serif',
    marginBottom: '1rem'
  };

  const subHeadLarge = {
    fontFamily: 'Helvetica',
    marginTop: '0.5rem'
  };

  const subHeadLargeSmall = {
    fontSize: '0.8rem',
    fontFamily: 'Helvetica',
    marginBottom: '1rem'
  };

  return (
    <>
      {USAData ? console.log('this is data state', USAData[0].positive) : null}
      <MediaQuery maxDeviceWidth={1223} device={{ deviceWidth: 1599 }}>
        <div style={styleDiv}>
          <div style={form}>
            <strong>
              <div style={titleSpan}>COVID-19 BY STATE</div>
            </strong>
            <div style={subHeadSmall}>Data updates daily at 4:00 p.m. EST.</div>
            <div style={subHead}>
              {USAData ? USAData[0].positive : ''} people have tested positive
              for COVID-19 in the United States.
              {USAData ? USAData[0].total : ''} have been tested.
            </div>
            <br></br>
            <USA />
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
                <option value="GU">Guam</option>
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
                <option value="PR">Puerto Rico</option>
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
          </div>
          <div>
            <div>
              <strong>{iLPositive}</strong> people have tested positive for
              COVID-19 in {state}. That's{' '}
              {Math.floor((iLPositive / total) * 100)}% of those who have been
              tested in the state.
            </div>
            <div>
              <strong>{ilNegative}</strong> people have tested negative for
              COVID-19 in {state}. That's{' '}
              {Math.floor((ilNegative / total) * 100)}% of those who have been
              tested in the state.{' '}
            </div>
            <div>
              <strong>{total} </strong>people have been tested in {state} so
              far. {pending} tests are currently pending results.
            </div>
            <br></br>
            <div>
              <strong>{state}</strong> has{' '}
              {Math.floor((iLPositive / usaPostive) * 100)} of all positive
              cases across the United States.
            </div>
            <div style={buttonParent}>
              <Link to={`/${state}`}>
                <button style={button}>{state}: see more</button>
              </Link>
            </div>
          </div>
          {/* <Totals data={data}></Totals> */}
        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
        <div style={styleDiv}>
          <div style={formLarge}>
            <strong>
              <div style={titleSpanLarge}>COVID-19 BY STATE</div>
            </strong>
            <div style={subHeadLargeSmall}>
              Data updates daily at 4:00 p.m. EST.
            </div>
            <div style={subHeadLarge}>
              <strong>{usaPostive}</strong> people have tested positive for
              COVID-19 in the United States. {usaTotal} have been tested.
            </div>
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
                <option value="GU">Guam</option>
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
                <option value="PR">Puerto Rico</option>
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
          </div>

          <div>
            <div>
              <strong>{iLPositive}</strong> people have tested positive for
              COVID-19 in {state}. That's{' '}
              {Math.floor((iLPositive / total) * 100)}% of those who have been
              tested in the state.
            </div>
            <div>
              <strong>{ilNegative}</strong> people have tested negative for
              COVID-19 in {state}. That's{' '}
              {Math.floor((ilNegative / total) * 100)}% of those who have been
              tested in the state.{' '}
            </div>
            <div>
              <strong>{total} </strong>people have been tested in {state} so
              far. {pending} tests are currently pending results.
            </div>
            <br></br>
            <div>
              <strong>{state}</strong> has around{' '}
              {Math.floor((iLPositive / usaPostive) * 100)}% of all positive
              cases across the United States.
            </div>
            <div style={buttonParent}>
              <Link to={`/${state}`}>
                <button style={button}>{state}: see more</button>
              </Link>
            </div>
          </div>
          {/* <Totals data={data}></Totals> */}
        </div>
      </MediaQuery>
    </>
  );
}

export default Component;
