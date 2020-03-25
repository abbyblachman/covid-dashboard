import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
// import Totals from '../components/Totals';
import { relativeTimeRounding } from 'moment';
import MediaQuery from 'react-responsive';
import { USADataContext } from '../utils/USAData';
import { StateDataContext } from '../utils/StateData';

function Component() {
  const [state, setState] = useState();
  const [USAData, setUSAData] = useContext(USADataContext);
  const [stateData, setStateData] = useContext(StateDataContext);

  // setNumbers();
  function onClick(event) {
    let state = event.target.value;
    getData(state);
  }
  function getData(state) {
    setState(state);
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?state=${state}`
    ).then(res => setStateData(res.data));
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
    fontSize: '0.8rem'
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
      <MediaQuery maxDeviceWidth={1223} device={{ deviceWidth: 1599 }}>
        <div style={styleDiv}>
          <div style={form}>
            <strong>
              <div style={titleSpan}>COVID-19 BY STATE</div>
            </strong>
            <div style={subHeadSmall}>Data updates daily at 4:00 p.m. EST.</div>
            <div style={subHead}>
              {USAData ? USAData[0].positive : ''} people have tested positive
              for COVID-19 in the United States.{' '}
              {USAData ? USAData[0].total : ''} have been tested.
            </div>
            <br></br>
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
              <strong> {USAData ? USAData[0].positive : ''}</strong> people have
              tested positive for COVID-19 in the United States.{' '}
              {USAData ? USAData[0].total : ''} have been tested.
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
        </div>
      </MediaQuery>
    </>
  );
}

export default Component;
