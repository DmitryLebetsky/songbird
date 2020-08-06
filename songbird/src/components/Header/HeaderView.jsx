import React from 'react';

const HeaderView = ({
  currentScore,
}) => (
  <header className="header">
    <h1 className="header__title">SongHunt</h1>
    <p className="header__current-score">{`Score: ${currentScore}`}</p>
  </header>
);

export default HeaderView;
