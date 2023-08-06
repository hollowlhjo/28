import React, { useState } from 'react';
import './App.css';

const TrafficLights = () => {
  const [currentColor, setCurrentColor] = useState('red');

  const handleButtonClick = () => {
    if (currentColor === 'red') {
      setCurrentColor('yellow');
    } else if (currentColor === 'yellow') {
      setCurrentColor('green');
    } else if (currentColor === 'green') {
      setCurrentColor('red');
    }
  };

  return (
    <div className="traffic-lights">
      <div className={`light red ${currentColor === 'red' ? 'active' : ''}`}></div>
      <div className={`light yellow ${currentColor === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${currentColor === 'green' ? 'active' : ''}`}></div>
      <button onClick={handleButtonClick}>Змінити колір</button>
    </div>
  );
};

export default TrafficLights;