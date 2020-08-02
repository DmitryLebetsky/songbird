import React from 'react';

const PlayAgainButtonView = ({
  className = '',
  isButtonNeon = false,
  onClick = () => {},
}) => (
  <button onClick={onClick} className={className}>
    {  
      isButtonNeon && (
        <>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </>
      )
    }
    Play again
  </button>
);

export default PlayAgainButtonView;