import React from 'react';
import formatDuration from 'format-duration';
export default ElapsedTime;

function elapsedTime(events) {
    let elapsed = 0;
    for (let i = 0; i < events.length; i += 2) {
      const start = events[i];
      const stop = events[i + 1] || new Date();
      elapsed += stop - start;
    }
    return elapsed;
}

 function  ElapsedTime({timingEvents}) {
    return <div className='timer-el'>{formatDuration(elapsedTime(timingEvents))}</div>;

    
}