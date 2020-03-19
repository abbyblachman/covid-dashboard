import React, {useState, useEffect} from 'react';

class Totals extends React.Component{


render () {

   let count = 0;
   let countNeg = 0;

   if (this.props.data === null) {
       alert('there is not updated data. please try again.')
   }
   else {
    return(
        <>
        {this.props.data.forEach(data => {
            count += data.positive;
        })}
        {this.props.data.forEach(data => {
            countNeg += data.negative;
        })}
        <div>{count} people have tested positive since testing data began being recorded on March 4.</div>
        <div>{countNeg} people have tested negative since testing began being recorded on March 4.</div>
        </>
    
    )

   }

    
}

}

export default Totals;