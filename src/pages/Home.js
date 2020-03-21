import React, {useState, useEffect} from 'react';
import Component from '../components/Component';
import Leaders from '../components/Leaders'
import MediaQuery from 'react-responsive'
import moment from 'moment';
 

function Home () {

   

const style = {
    paddingBottom: '5rem', 
    marginLeft: 'auto', 
    marginRight: 'auto',
    marginTop: '3rem',
    width: '40rem', 
    fontSize: '1rem', 
    // paddingLeft: '10rem', 
    // paddingRight: '10rem'
}

const styleSmall = {
    display: 'flex', 
    flexDirection: 'column', 
    fontSize: '1.5rem', 
    marginRight: '2rem', 
    marginLeft: '2rem', 
    paddingLeft: '0rem', 
    paddingRight: '0rem'
}

    return(
    <div className="container" style={style}>
   
   <MediaQuery maxDeviceWidth={1223} device={{ deviceWidth: 1599 }}>
    <Component styles={styleSmall}></Component>
    <Leaders styles={styleSmall}></Leaders>
    </MediaQuery>
    <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
    <Component styles={style}></Component>
    <Leaders styles={style}></Leaders>
    </MediaQuery>

    </div>
    )
}

export default Home;