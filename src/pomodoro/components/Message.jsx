import React from 'react';
import '../css/Message.scss';
import { BREAK_MESSAGES } from '../const/Messages';
import { FOCUS_MESSAGES } from '../const/Messages';

const breakMessages = BREAK_MESSAGES;
const focusMessages = FOCUS_MESSAGES;

const Message = (props) => {
  let messageLength = 0;
  if (focusMessages[props.messageNumber].message) {
    messageLength = focusMessages[props.messageNumber].message.length;
  } else {
    messageLength = breakMessages[props.messageNumber].message.length;
  }
  return (
    <div
      className={`message-container ${
        props.type === 'focus' ? 'focus-shadow' : 'brake-shadow'
      }`}
    >
      <p className={`message ${messageLength > 100 ? 'small-font' : ''}`}>
        {props.type === 'focus'
          ? `"  ${focusMessages[props.messageNumber].message} "`
          : `"  ${breakMessages[props.messageNumber].message} "`}
      </p>
      <p className={`author ${messageLength > 100 ? 'small-font' : ''}`}>
        <span>{'<<'}</span>
        {props.type === 'focus'
          ? focusMessages[props.messageNumber].author
          : breakMessages[props.messageNumber].author}
        <span>{'>>'}</span>
      </p>
    </div>
  );
};

export default Message;
