import React from 'react';
import '../css/TimeControl.scss';

const TimeControl = (props) => {
  const handleIncreaseTime = () => {
    if (props.time < 60) {
      props.handleTime(props.time + 1);
    }
  };

  const handleDecreaseTime = () => {
    if (props.time > 0) {
      props.handleTime(props.time - 1);
    }
  };

  return (
    <div className='time-control'>
      <span className='text'>{props.controlType}</span>
      <div className='button-group'>
        <button onClick={handleIncreaseTime}>+</button>
        <span className='time'>
          {props.time < 10 ? '0' + props.time : props.time}
        </span>
        <button onClick={handleDecreaseTime}>-</button>
      </div>
      <span className='text'>Time</span>
    </div>
  );
};

export default TimeControl;
