import React from 'react';

import Header from '../Header';
import Genres from '../Genres';
import ActiveSong from '../ActiveSong';
import SongsFromCurrentActiveGenreContainer from '../SongsFromCurrentActiveGenreContainer';

const SongHuntAppView = ({
  currentActiveGenreData,
  currentScore,
  currentActiveSong,
  currentChoosedSong,
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
      <SongsFromCurrentActiveGenreContainer
        songsFromCurrentActiveGenre={currentActiveGenreData.songs}
        currentChoosedSong={currentChoosedSong}/>
    </div>
  </div>
);

export default SongHuntAppView;