import React from 'react';
import '../css/SwitchButton.scss';

const SwitchButton = (props) => {
  return (
    <div>
      <div className='switch-button'>
        <div className='description'>{props.text}</div>
        <label className='switch'>
          <input
            // default='checked'
            type='checkbox'
            onChange={props.toggleAction}
          />
          <div className='slider'>
            <div className='content'>
              <span className='off-text'>OFF</span>
              <span className='on-text'>ON</span>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default SwitchButton;
