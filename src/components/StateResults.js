import React, { useState, useContext } from 'react';
import { USADataContext } from '../utils/USAData';
import { StateDataContext } from '../utils/StateData';
import { StateNameContext } from '../utils/StateName';
import State2 from '../components/State2';

function StateResults(props) {
  const [stateName, setStateName] = useContext(StateNameContext);
  const [USAData, setUSAData] = useContext(USADataContext);
  const [stateData, setStateData] = useContext(StateDataContext);
  const [showChart, setShowChart] = useState(false);

  const styleDiv = {};

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

  return (
    <>
      {stateData && USAData ? (
        <>
          <div style={styleDiv}>
            <div>
              {' '}
              <div>
                <strong>{stateData[0].positive}</strong> people have tested
                positive for COVID-19 in {stateName}. That's{' '}
                {Math.floor((stateData[0].positive / stateData[0].total) * 100)}
                % of those who have been tested in {stateName}.
              </div>
              <div>
                <strong>{stateData[0].negative}</strong> people have tested
                negative for COVID-19 in {stateName}. That's{' '}
                {Math.floor((stateData[0].negative / stateData[0].total) * 100)}
                % of those who have been tested in {stateName}.
              </div>
              <div>
                <strong>{stateData[0].total} </strong>people have been tested in{' '}
                {stateName} so far.
                {/* {pending} tests are currently pending results. */}
              </div>
              <br></br>
              <div>
                <strong>{stateName}</strong> has around{' '}
                {Math.floor(
                  (stateData[0].positive / USAData[0].positive) * 100
                )}
                % of all positive cases across the United States.
              </div>
              <div style={buttonParent}>
                <button style={button} onClick={() => setShowChart(!showChart)}>
                  {stateName}: {showChart ? 'Hide' : 'See More'}
                </button>
              </div>
              {showChart ? <State2></State2> : ''}
            </div>
          </div>
        </>
      ) : (
        <div>
          'Waiting for information'
          <div style={buttonParent}>
            <button style={button} onClick={() => setShowChart(!showChart)}>
              {stateName}: {showChart ? 'Hide' : 'See More'}
            </button>
          </div>
          {showChart ? <State2></State2> : ''}
        </div>
      )}
    </>
  );
}

export default StateResults;
