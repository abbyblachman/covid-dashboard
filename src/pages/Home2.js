import React, { useState, useEffect, useContext } from 'react';
import LeaderTwo from '../components/LeadersTwo';
import Map from '../components/MapHC';
import StateResults from '../components/StateResults';
import StateForm from '../components/StateForm';
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
  },[]);

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
  
  function renderSwitch(stateName){
    switch (stateName)
    {
        case "AL":
            return "Alabama";
        case "AK":
            return "Alaska";
        case "AS":
            return
        case "AZ":
            return "Arizona";
        case "AR":
            return "Arkansas";
        case "CA":
            return "California";
        case "CO":
            return "Colorado";
        case "CT":
            return "Connecticut";
        case "DE":
            return "Delaware";
        case "DC":
            return "District Of Columbia";
        case "FM":
            return "Federated States Of Micronesia";
        case "FL":
            return "Florida";
        case "GA":
            return "Georgia";
        case "GU":
            return "Guam";
        case "HI":
            return "Hawaii";
        case "ID":
            return "Idaho";
        case "IL":
            return "Illinois";
        case "IN":
            return "Indiana";
        case "IA":
            return "Iowa";
        case "KS":
            return "Kansas";
        case "KY":
            return "Kentucky";
        case "LA":
            return "Louisiana";
        case "ME":
            return "Maine";
        case "MH":
            return "Marshall Islands";
        case "MD":
            return "Maryland";
        case "MA":
            return "Massachusetts";
        case "MI":
            return "Michigan";
        case "MN":
            return "Minnesota";
        case "MS":
            return "Mississippi";
        case "MO":
            return "Missouri";
        case "MT":
            return "Montana";
        case "NE":
            return "Nebraska";
        case "NV":
            return "Nevada";
        case "NH":
            return "New Hampshire";
        case "NJ":
            return "New Jersey";
        case "NM":
            return "New Mexico";
        case "NY":
            return "New York";
        case "NC":
            return "North Carolina";
        case "ND":
            return "North Dakota";
        case "MP":
            return "Northern Mariana Islands";
        case "OH":
            return "Ohio";
        case "OK":
            return "Oklahoma";
        case "OR":
            return "Oregon";
        case "PW":
            return "Palau";
        case "PA":
            return "Pennsylvania";
        case "PR":
            return "Puerto Rico";
        case "RI":
            return "Rhode Island";
        case "SC":
            return "South Carolina";
        case "SD":
            return "South Dakota";
        case "TN":
            return "Tennessee";
        case "TX":
            return "Texas";
        case "UT":
            return "Utah";
        case "VT":
            return "Vermont";
        case "VI":
            return "Virgin Islands";
        case "VA":
            return "Virginia";
        case "WA":
            return "Washington";
        case "WV":
            return "West Virginia";
        case "WI":
            return "Wisconsin";
        case "WY":
            return "Wyoming";
            default:
              return ''
    }
  }
  

  return (
    <>
      <div className="homeWrapper">
        <div className="header">
          <strong>
            <div className="titleHeader">COVID-19 BY STATE</div>
          </strong>
          <div className="subHeader">Data updates daily at 4:00 p.m. EST.</div>
        </div>
        <div className="content">
          <div className="formWrapper">
            <section className="stateFormSection">
              <StateForm />
            </section>
            <section className="map">
              <Map />
            </section>
          </div>
          <div className="infoCards">
            <section className="cards">
              <div className="cardTitle">
                <strong>
                    {renderSwitch(stateName)}
                </strong>
              </div>
              <div className="cardContent">
                <StateResults />
              </div>
            </section>
            <section className="cards">
              <div className="cardTitle">
                <strong>States with the most positive results:</strong>
              </div>
              <div className="cardContent">
                <LeaderTwo />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
