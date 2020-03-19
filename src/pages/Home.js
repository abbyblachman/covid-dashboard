import React, {useState, useEffect} from 'react';
import Component from '../components/Component';
import Leaders from '../components/Leaders'
import MediaQuery from 'react-responsive'
 

function Home () {

    

const style = {
    paddingBottom: '5rem', 
    margin: '5rem'
}

const styleSmall = {
    display: 'flex', 
    flexDirection: 'column', 
    fontSize: '1.5rem', 
    marginRight: '7rem', 
    marginLeft: '7rem'
}

    return(
    <div className="container" style={style}>
   
   <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
    <Component styles={style}></Component>
    <Leaders styles={style}></Leaders>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
    <Component styles={styleSmall}></Component>
    <Leaders styles={styleSmall}></Leaders>
    </MediaQuery>

    </div>
    )
}

export default Home;