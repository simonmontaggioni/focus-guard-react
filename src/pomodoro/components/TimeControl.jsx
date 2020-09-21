import React from 'react';
import '../css/TimeControl.scss';

const TimeControl = (props) => {
  return (
    <div className='time-control'>
      <span>{props.controlType}</span>
      <button>+</button>
      <span className='time'>00</span>
      <button>-</button>
      <span>Time</span>
    </div>
  );
};

export default TimeControl;
