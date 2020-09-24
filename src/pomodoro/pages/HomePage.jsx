import React from 'react';
import Pomodoro from '../components/Pomodoro';
import '../css/HomePage.scss';

const HomePage = () => {
  return (
    <div className='main-container'>
      <h1>Focus Guard: a pomodoro timer.</h1>
      <Pomodoro />
    </div>
  );
};

export default HomePage;
