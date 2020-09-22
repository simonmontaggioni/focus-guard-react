import React from 'react';
import '../css/Display.scss';

const Display = () => {
  return (
    <div className='display'>
      <span className='digits'>00</span>
      <span className='colon'>:</span>
      <span className='digits'>00</span>
    </div>
  );
};

export default Display;
