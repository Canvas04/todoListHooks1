import React from 'react';
import Start from '../start';
import Stop from '../stop';
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