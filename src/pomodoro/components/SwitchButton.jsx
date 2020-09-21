import React from 'react';
import '../css/SwitchButton.scss';

const SwitchButton = (props) => {
  return (
    <div>
      <div className='switch-button'>
        <div className='description'>{props.text}</div>
        <label className='switch'>
          <input type='checkbox' />
          <div className='slider'>
            <div className='content'>
              <span>ON</span>
              <span>OFF</span>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default SwitchButton;
