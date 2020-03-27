import React, { useState, useEffect, useContext } from 'react';
import LineChart from './LineChart';
import { Link } from 'react-router-dom';
import { USADataContext } from '../utils/USAData';
import { StateDataContext } from '../utils/StateData';
import { StateNameContext } from '../utils/StateName';
import moment from 'moment';

function State(props) {
  const [stateName, setStateName] = useContext(StateNameContext);
  const [USAData, setUSAData] = useContext(USADataContext);
  const [stateData, setStateData] = useContext(StateDataContext);

  const [tests, setTests] = useState([]);
  const [positive, setPositive] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    setLocalState();
  }, [stateData]);

  function setLocalState() {
    stateData.reverse();
    stateData.forEach(data => {
      let newDate = moment(`${data.date}`).format('MMMM Do');
      setTests(tests => [...tests, data.total]);
      setPositive(positive => [...positive, data.positive]);
      setDate(date => [...date, newDate]);
    });
  }

  const styleLine = {
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'relative'
  };

  const style = {
    margin: 'auto',
    width: '95%',
    fontSize: '1rem'
  };

  const totalSpan = {
    display: 'inline block',
    marginTop: '1rem',
    padding: '0.2rem',
    border: '1px solid',
    borderRadius: '5%',
    color: 'white',
    backgroundColor: '#FFAA00'
  };

  const positiveSpan = {
    display: 'inline block',
    margin: '1rem',
    padding: '0.2rem',
    border: '1px solid',
    borderRadius: '5%',
    color: 'white',
    backgroundColor: 'black'
  };

  const spanParent = {
    textAlign: 'center',
    marginTop: '1rem'
  };

  return (
    <div style={style}>
      <div>
        <div style={styleLine}>
          <LineChart tests={tests} positive={positive} date={date}></LineChart>
        </div>
      </div>
      <div style={spanParent}>
        <span style={totalSpan}>
          <strong>Total tests</strong>
        </span>
        <span style={positiveSpan}>
          <strong>Positive tests</strong>
        </span>
      </div>
    </div>
  );
}

export default State;
