import React from 'react';
import Pomodoro from '../components/Pomodoro';
import Message from '../components/Message';
import '../css/HomePage.scss';

const HomePage = () => {
  return (
    <div className='main-container'>
      <h1>Focus Guard: a pomodoro timer.</h1>
      <Pomodoro />
      <Message message={'Get Focus and conquer the world!!!'} />
    </div>
  );
};

export default HomePage;
