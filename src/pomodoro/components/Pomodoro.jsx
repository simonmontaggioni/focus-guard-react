import React from 'react';
import Display from './Display';
import '../css/Pomodoro.scss';
import TimeControl from './TimeControl';

const Pomodoro = () => {
  return (
    <div className='pomodoro'>
      <div>
        <TimeControl controlType={'Break'} />
      </div>
      <Display />
      <div>
        <TimeControl controlType={'Focus'} />
      </div>
    </div>
  );
};

export default Pomodoro;
