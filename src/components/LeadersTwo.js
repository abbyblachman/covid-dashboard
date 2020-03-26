import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { USADataContext } from '../utils/USAData';

function Leaders() {
  const [topStates, setTopStates] = useState(false);
  const [USAData, setUSAData] = useContext(USADataContext);

  let now = moment().format('YYYYMMDD');
  let startdate = moment()
    .subtract(1, 'days')
    .format('YYYYMMDD');

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const arr = [];

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?date=${now}`
      )
      .then(res => {
        res.data.forEach(data => {
          arr.push({
            state: data.state,
            positive: data.positive,
            total: data.total
          });
        });
        arr.sort(function(a, b) {
          return b.positive - a.positive;
        });
        setTopStates(arr);
      })
      .then(() => {
        if (arr.length === 0) {
          axios
            .get(
              `https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?date=${startdate}`
            )
            .then(res => {
              if (res.data.length === 0) {
                alert(
                  'The API is reloading data at this time. Please reload the page.'
                );
              }
              if (res.data.length !== 0) {
                res.data.forEach(data => {
                  arr.push({
                    state: data.state,
                    positive: data.positive,
                    total: data.total
                  });
                });
                arr.sort(function(a, b) {
                  return b.positive - a.positive;
                });
                setTopStates(arr);
              }
            });
        }
      });
  }

  const style = {
    // marginLeft: 'auto',
    // marginRight: 'auto',
  };

  const span = {
    fontSize: '1.5rem',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    fontFamily: 'Bree Serif'
  };

  const a = {
    textDecorationg: 'underline',
    color: 'black'
  };

  const subHeadSmall = {
    fontFamily: 'Helvetica',
    marginTop: '2rem',
    fontSize: '0.5rem'
  };

  return (
    <>
      {USAData && topStates ? (
        <div style={style}>
          <div style={span}>States with the most positive tests so far:</div>
          <div>
            <Link to={`/${topStates[0].state}`}>
              <strong style={a}>{topStates[0].state}</strong>
            </Link>
            : {topStates[0].positive} cases statewide.{' '}
            {Math.floor((topStates[0].positive / USAData[0].positive) * 100)}%
            of cases nationwide are in this state.
          </div>
          <div>
            <Link to={`/${topStates[1].state}`}>
              <strong style={a}>{topStates[1].state}</strong>
            </Link>
            : {topStates[1].positive} cases statewide.{' '}
            {Math.floor((topStates[1].positive / USAData[0].positive) * 100)}%
            of cases nationwide are in this state.
          </div>
          <div>
            <Link to={`/${topStates[2].state}`}>
              <strong style={a}>{topStates[2].state}</strong>
            </Link>
            : {topStates[2].positive} cases statewide.{' '}
            {Math.floor((topStates[2].positive / USAData[0].positive) * 100)}%
            of cases nationwide are in this state.
          </div>
          <div>
            <Link to={`/${topStates[3].state}`}>
              <strong style={a}>{topStates[3].state}</strong>
            </Link>
            : {topStates[3].positive} cases statewide.{' '}
            {Math.floor((topStates[3].positive / USAData[0].positive) * 100)}%
            of cases nationwide are in this state.
          </div>
          <div>
            <Link to={`/${topStates[4].state}`}>
              <strong style={a}>{topStates[4].state}</strong>
            </Link>
            : {topStates[4].positive} cases statewide.{' '}
            {Math.floor((topStates[4].positive / USAData[0].positive) * 100)}%
            of cases nationwide are in this state.
          </div>
          <div style={subHeadSmall}>
            Built w/ ❤️ by Abby Blachman and Hannah Chamorro. View the{' '}
            <a href="https://github.com/abbyblachman/covid-dashboard">
              source code
            </a>{' '}
            on GitHub.
          </div>
        </div>
      ) : (
        'waiting for info'
      )}
    </>
  );
}

export default Leaders;
