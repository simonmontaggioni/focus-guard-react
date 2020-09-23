import React, { useState } from 'react';
// import useInterval from '../hooks/useInterval';
import Display from './Display';
import '../css/Pomodoro.scss';
import TimeControl from './TimeControl';
import Button from './Button';
import SwitchButton from './SwitchButton';
import useInterval from '../hooks/useInterval';

const MINUTES = 2;
const SECONDS = 10;
const DEFAULT_DELAY = 500;

const Pomodoro = () => {
  const [counter, setCounter] = useState({
    minutes: MINUTES,
    seconds: SECONDS,
  });
  const [running, setRuning] = useState(false);
  const [delay, setDelay] = useState(null);

  const saveCounterState = (minutes, seconds) => {
    setCounter({ ...counter, minutes, seconds });
  };

  const countDown = () => {
    if (counter.seconds > 0) {
      saveCounterState(counter.minutes, counter.seconds - 1);
    } else {
      if (counter.minutes > 0) {
        saveCounterState(counter.minutes - 1, 9);
      } else {
        setDelay(null);
      }
    }
  };

  useInterval(countDown, delay);

  const startCountDown = () => {
    setDelay(DEFAULT_DELAY);
    setRuning(true);
  };

  const handleReset = () => {
    setDelay(null);
    setRuning(false);
    setCounter({ ...counter, minutes: MINUTES, seconds: SECONDS });
  };

  const handlePlay = () => {
    if (running) {
      setDelay(null);
      setRuning(false);
    } else {
      startCountDown();
    }
  };

  return (
    <div className='pomodoro'>
      <div className='first-row'>
        <SwitchButton text={'Notifications'} />
        <TimeControl controlType={'Break'} />
      </div>
      <div className='second-row'>
        <Button text={'Reset'} handleOnClick={handleReset} />
        <Display minutes={counter.minutes} seconds={counter.seconds} />
        <Button text={'Play/Pause'} handleOnClick={handlePlay} />
      </div>
      <div className='third-row'>
        <SwitchButton text={'Sound'} />
        <TimeControl controlType={'Focus'} />
      </div>
    </div>
  );
};

export default Pomodoro;
