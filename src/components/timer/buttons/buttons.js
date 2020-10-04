import React from 'react';
import Start from '../start';
import Stop from '../stop';
import propTypes from 'prop-types';

export default function Buttons({handleClick,timingEvents}) {
    const label = timingEvents.length % 2 === 0 ? <Start /> : <Stop />
    return (
        <div>
            <button type='button' onClick={  handleClick}>
             {label}   
            </button>
            
        </div>
    )
}
Buttons.propTypes = {
    handleClick: propTypes.func.isRequired,
    timingEvents: propTypes.arrayOf(propTypes.string)
}