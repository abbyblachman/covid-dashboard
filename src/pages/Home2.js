import React, { useState, useEffect, useContext } from 'react';
import LeaderTwo from '../components/LeadersTwo';
import Map from '../components/MapHC';
import StateResults from '../components/StateResults';
import StateForm from '../components/StateForm';
import Header from '../components/Header';
import { AllStatesDataContext } from '../utils/AllStatesDataContext';
import { USADataContext } from '../utils/USAData';
import { StateDataContext } from '../utils/StateData';
import { StateNameContext } from '../utils/StateName';
import Axios from 'axios';
import './style.css';

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

  const titleWrapper = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const infoWrapper = {
    display: 'flex',
    justifyContent: 'space-around'
  };

  const leftColumn = {
    maxWidth: '30%',
    padding: '1rem'
  };
  const subHeadLargeSmall = {
    fontSize: '0.8rem',
    fontFamily: 'Helvetica',
    marginBottom: '1rem'
  };
  const titleSpanLarge = {
    textAlign: 'left',
    fontSize: '2rem',
    fontFamily: 'Bree Serif',
    marginBottom: '1rem'
  };

  const subHeadSmall = {
    fontFamily: 'Helvetica',
    marginTop: '0.5rem',
    fontSize: '0.8rem'
  };

  return (
    <>
      <div className="homeWrapper">
        <div className="header">
          <strong>
            <div className="titleHeader">COVID-19 BY STATE</div>
          </strong>
          <div className="subHeader">Data updates daily at 4:00 p.m. EST.</div>
        </div>
        <div className="infoCards">
          <section>
            <StateResults />
          </section>
          <section>
            <LeaderTwo />
          </section>
          <div>
            <section className="stateFormSection">
              <StateForm />
            </section>
            <section className="map">
              <Map />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
