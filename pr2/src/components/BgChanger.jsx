import React from 'react';

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange'];

const BgChanger = ({ changeBackground }) => {
  return (
    <div className='fixed bottom-5 flex gap-4'>  {/* Corrected 'botton-5' to 'bottom-5' */}
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => changeBackground(color)}
          className="text-white font-bold py-2 px-4 rounded border"  // Corrected 'border-red-500' to 'border-red-500 border'
          style={{ backgroundColor: color }}  // Inline style for button background color
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default BgChanger;