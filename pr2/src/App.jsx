import React, { useState } from 'react';
import BgChanger from './components/BgChanger';
import Bgdisplay from './components/Bgdisplay';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const changeBackground = (color) => {
    setBgColor(color);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: bgColor }}  // Use inline style for dynamic background color
    >
      <Bgdisplay bgColor={bgColor} />
      <BgChanger changeBackground={changeBackground} />
    </div>
  );
}

export default App;
