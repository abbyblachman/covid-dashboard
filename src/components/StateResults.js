import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { USADataContext } from '../utils/USAData';
import { StateDataContext } from '../utils/StateData';

function Component() {
  const [state, setState] = useState('NY');

  const [USAData, setUSAData] = useContext(USADataContext);
  const [stateData, setStateData] = useContext(StateDataContext);

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
      {USAData ? console.log('this is data state', USAData[0].positive) : null}
      {stateData && USAData ? (
        <>
          <div style={styleDiv}>
            <div>
              {' '}
              ***********************************************************
              <div>
                <strong>{stateData[0].positive}</strong> people have tested
                positive for COVID-19 in {state}. That's{' '}
                {Math.floor((stateData[0].positive / stateData[0].total) * 100)}
                % of those who have been tested in the state.
              </div>
              <br></br>
              <div>
                <strong>{stateData[0].negative}</strong> people have tested
                negative for COVID-19 in {state}. That's{' '}
                {Math.floor((stateData[0].negative / stateData[0].total) * 100)}
                % of those who have been tested in the state.
              </div>
              <br></br>
              <div>
                <strong>{stateData[0].total} </strong>people have been tested in{' '}
                {state} so far.
                {/* {pending} tests are currently pending results. */}
              </div>
              <br></br>
              <div>
                <strong>{state}</strong> has{' '}
                {Math.floor(
                  (stateData[0].positive / USAData[0].positive) * 100
                )}
                % of all positive cases across the United States.
              </div>
              <div style={buttonParent}>
                <Link to={`/${state}`}>
                  <button style={button}>{state}: see more</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        'Waiting for information'
      )}
    </>
  );
}

export default Component;
