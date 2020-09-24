import React, { useState } from 'react';
import Display from './Display';
import '../css/Pomodoro.scss';
import TimeControl from './TimeControl';
import Button from './Button';
import SwitchButton from './SwitchButton';
import Message from '../components/Message';

import useInterval from '../hooks/useInterval';

const MINUTES = 2;
const SECONDS = 0;
const DEFAULT_DELAY = 50;
const MAX_TIME_VALUE = 59;

const Pomodoro = () => {
  const [counter, setCounter] = useState({
    minutes: MINUTES,
    seconds: SECONDS,
  });
  const [idle, setIdle] = useState(true);
  const [running, setRuning] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState('focus');
  const [messageNumber, setMessageNumber] = useState(
    Math.floor(Math.random() * 10)
  );
  const [delay, setDelay] = useState(null);
  const [focusTime, setFocusTime] = useState(true);
  const [focusTimeValue, setFocusTimeValue] = useState(MINUTES);
  const [breakTimeValue, setBreakTimeValue] = useState(5);

  const saveCounterState = (minutes, seconds) => {
    setCounter({ ...counter, minutes, seconds });
  };

  const countDown = () => {
    if (counter.seconds > 0) {
      saveCounterState(counter.minutes, counter.seconds - 1);
    } else {
      if (counter.minutes > 0) {
        saveCounterState(counter.minutes - 1, MAX_TIME_VALUE);
      } else {
        if (focusTime) {
          saveCounterState(breakTimeValue, SECONDS);
          setMessageType('brake');
        } else {
          saveCounterState(focusTimeValue, SECONDS);
          setMessageType('focus');
        }
        setMessageNumber(Math.floor(Math.random() * 10));
        setShowMessage(true);
        setFocusTime(!focusTime);
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
    setIdle(true);
    setShowMessage(false);
    setMessageType('focus');
    setCounter({ ...counter, minutes: focusTimeValue, seconds: SECONDS });
  };

  const handlePlay = () => {
    if (running) {
      setDelay(null);
      setRuning(false);
    } else {
      setIdle(false);
      setShowMessage(true);
      startCountDown();
    }
  };

  const handleFocusTimeValue = (minutes) => {
    if (idle) {
      setFocusTimeValue(minutes);
      saveCounterState(minutes, SECONDS);
    }
  };
  const handleBreakTimeValue = (minutes) => {
    if (idle) {
      setBreakTimeValue(minutes);
    }
  };

  return (
    <>
      <div className='pomodoro'>
        <div className='first-row'>
          <SwitchButton text={'Notifications'} />
          <TimeControl
            controlType={'Break'}
            handleTime={handleBreakTimeValue}
            time={breakTimeValue}
          />
        </div>
        <div className='second-row'>
          <Button text={'Reset'} handleOnClick={handleReset} />
          <Display minutes={counter.minutes} seconds={counter.seconds} />
          <Button text={'Play/Pause'} handleOnClick={handlePlay} />
        </div>
        <div className='third-row'>
          <SwitchButton text={'Sound'} />
          <TimeControl
            controlType={'Focus'}
            handleTime={handleFocusTimeValue}
            time={focusTimeValue}
          />
        </div>
      </div>
      {showMessage && (
        <Message type={messageType} messageNumber={messageNumber} />
      )}
    </>
  );
};

export default Pomodoro;
