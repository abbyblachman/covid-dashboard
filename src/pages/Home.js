import React, {useState, useEffect} from 'react';
import Component from '../components/Component';
import Leaders from '../components/Leaders'

function Home () {

const style = {
    paddingBottom: '5rem', 
    margin: '5rem'
}

    return(
        <div className="container" style={style}>
            
    <Component styles={style}></Component>
    <Leaders styles={style}></Leaders>
    </div>
    )
}

export default Home;