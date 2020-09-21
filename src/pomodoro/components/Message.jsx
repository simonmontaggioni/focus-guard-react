import React from 'react';
import '../css/Message.scss';

const Message = (props) => {
  return (
    <div className='message'>
      <p>{props.message}</p>
    </div>
  );
};

export default Message;
