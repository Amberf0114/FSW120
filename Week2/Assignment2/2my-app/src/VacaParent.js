import React from 'react';
// import VacaArray from './VacaArray'

function VacaParent(props) {
    return (
        <div>
            <h3>Place: {props.myPlace}</h3>
            <h3>Price: {props.price}</h3>
            <h3>Time to Go: {props.timeToGo}</h3>
        </div>
    )
}

export default VacaParent;