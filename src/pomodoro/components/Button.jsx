import React from 'react';
import '../css/Button.scss';

const Button = (props) => {
  return (
    <div className='button'>
      <span>{props.text}</span>
    </div>
  );
};

export default Button;
