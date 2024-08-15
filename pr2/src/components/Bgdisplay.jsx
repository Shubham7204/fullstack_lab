import React from 'react';

const Bgdisplay = ({ bgColor }) => {
  return (
    <div className='text-3xl font-bold'>
      Background color is {bgColor.charAt(0).toUpperCase() + bgColor.slice(1)}
    </div>
  );
}

export default Bgdisplay;
