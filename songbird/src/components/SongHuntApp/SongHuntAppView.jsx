import React from 'react';

import Header from '../Header';
import Genres from '../Genres';
import ActiveSong from '../ActiveSong';

const SongHuntAppView = ({
  currentActiveGenreData,
  currentScore,
  currentActiveSong,
}) => (
  <div className={`songhunt-app-container theme-${currentActiveGenreData.title.toLocaleLowerCase()}`}>
    <div className="songhung-app-wrapper">
      <Header
        currentScore={currentScore}/>
      <Genres
        currentActiveGenreData={currentActiveGenreData}/>
      <ActiveSong
        currentActiveGenreData={currentActiveGenreData}
        currentActiveSong={currentActiveSong}/>
    </div>
  </div>
);

export default SongHuntAppView;