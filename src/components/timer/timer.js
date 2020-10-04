import React, { useState, useEffect } from "react";
import "./timer.css";
import Buttons from './buttons';
import ElapsedTime from './elapsed-time';

export default function Timer() {
  const [timingEvents, setTimingEvents] = useState([]);
  const [nonce, setNonce] = useState(0);
  const tick = () => {
    setNonce(() => setNonce(nonce + 1));
  };
  const addTimerEvent = () => {
    setTimingEvents([...timingEvents, new Date()]);
  };
  useEffect(() => {
    setInterval(tick, 1000);
    return function () {
      clearInterval(tick);
      clearInterval(addTimerEvent);
    };
  });
  
  return <>
   <div className='timer'>
         <ElapsedTime timingEvents={timingEvents} />
         <Buttons handleClick={addTimerEvent} timingEvents={timingEvents}/>
       </div>
  </>;
}
