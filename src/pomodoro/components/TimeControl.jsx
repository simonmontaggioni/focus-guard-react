import React from 'react';
import '../css/TimeControl.scss';

const TimeControl = (props) => {
  return (
    <div className='time-control'>
      <span className='text'>{props.controlType}</span>
      <div className='button-group'>
        <button>+</button>
        <span className='time'>00</span>
        <button>-</button>
      </div>
      <span className='text'>Time</span>
    </div>
  );
};

export default TimeControl;
