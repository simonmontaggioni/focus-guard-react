import React from 'react';
import '../css/Message.scss';

const breakMessages = [
  'break message 1',
  'break message 2',
  'break message 3',
  'break message 4',
  'break message 5',
  'break message 6',
  'break message 7',
  'break message 8',
  'break message 9',
  'break message 10',
];
const focusMessages = [
  'focus message 1',
  'focus message 2',
  'focus message 3',
  'focus message 4',
  'focus message 5',
  'focus message 6',
  'focus message 7',
  'focus message 8',
  'focus message 9',
  'focus message 10',
];

const Message = (props) => {
  return (
    <div className={`message ${props.type === 'focus' ? 'focus' : 'brake'}`}>
      <p>
        {props.type === 'focus'
          ? focusMessages[props.messageNumber]
          : breakMessages[props.messageNumber]}
      </p>
    </div>
  );
};

export default Message;
