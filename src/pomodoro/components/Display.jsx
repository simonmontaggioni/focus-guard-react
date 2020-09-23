import React from 'react';
import '../css/Display.scss';

const Display = ({ minutes, seconds }) => {
  return (
    <div className='display'>
      <span className='digits'>{minutes < 10 ? '0' + minutes : minutes}</span>
      <span className={`colon ${seconds % 2 === 0 ? 'dark' : 'light'}`}>:</span>
      <span className='digits'>{seconds < 10 ? '0' + seconds : seconds}</span>
    </div>
  );
};

export default Display;
