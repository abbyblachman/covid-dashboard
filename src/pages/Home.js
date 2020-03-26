import React, { useState, useEffect, useContext } from 'react';
import Component from '../components/Component';
import Leaders from '../components/Leaders';
import LeaderTwo from '../components/LeadersTwo';
import Map from '../components/MapHC';
import MediaQuery from 'react-responsive';
import StateResults from '../components/StateResults';
import StateForm from '../components/StateForm';
import { AllStatesDataContext } from '../utils/AllStatesDataContext';
import { USADataContext } from '../utils/USAData';
import { StateDataContext } from '../utils/StateData';
import { StateNameContext } from '../utils/StateName';

import Axios from 'axios';
import moment from 'moment';

function Home() {
  const [AllStatesData, setAllStatesData] = useContext(AllStatesDataContext);
  const [USAData, setUSAData] = useContext(USADataContext);
  const [stateData, setStateData] = useContext(StateDataContext);
  const [stateName, setStateName] = useContext(StateNameContext);

  useEffect(() => {
    fetchAllStatesData();
    fetchUSAData();
    fetchStateDataInit();
  }, []);

  function fetchAllStatesData() {
    Axios.get('https://covidtracking.com/api/states').then(res =>
      setAllStatesData(res.data)
    );
  }

  function fetchUSAData() {
    Axios.get('https://covidtracking.com/api/us').then(res =>
      setUSAData(res.data)
    );
  }

  function fetchStateDataInit() {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?state=${stateName}`
    ).then(res => setStateData(res.data));
  }

  const style = {
    paddingBottom: '5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '3rem',
    width: '23rem',
    fontSize: '1rem'
    // paddingLeft: '10rem',
    // paddingRight: '10rem'
  };

  const styleSmall = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.5rem',
    marginRight: '2rem',
    marginLeft: '2rem',
    paddingLeft: '0rem',
    paddingRight: '0rem'
  };

  return (
    <>
      {console.log('this shoule be new york data', stateData)}
      <div className="container" style={style}>
        <MediaQuery maxDeviceWidth={1223} device={{ deviceWidth: 1599 }}>
          {/* <Component styles={styleSmall}></Component> */}
          {/* <Leaders styles={styleSmall}></Leaders> */}
          <StateForm styles={styleSmall}></StateForm>
          <StateResults styles={styleSmall}></StateResults>
          <LeaderTwo styles={styleSmall}></LeaderTwo>
        </MediaQuery>
        <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
          {/* <Component styles={style}></Component> */}
          {/* <Leaders styles={style}></Leaders> */}
          <StateForm styles={style}></StateForm>
          <StateResults styles={style}></StateResults>
          <LeaderTwo styles={style}></LeaderTwo>
        </MediaQuery>
      </div>
      <Map />
    </>
  );
}

export default Home;
