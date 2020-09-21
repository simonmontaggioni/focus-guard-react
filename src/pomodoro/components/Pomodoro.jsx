import React from 'react';
import Display from './Display';
import '../css/Pomodoro.scss';
import TimeControl from './TimeControl';
import Button from './Button';

const Pomodoro = () => {
  return (
    <div className='pomodoro'>
      <div className='first-row'>
        <TimeControl controlType={'Break'} />
      </div>
      <div className='second-row'>
        <Button text={'Reset'} />
        <Display />
        <Button text={'Play/Pause'} />
      </div>
      <div className='third-row'>
        <TimeControl controlType={'Focus'} />
      </div>
    </div>
  );
};

export default Pomodoro;
