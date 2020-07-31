import React from 'react';

import Header from '../Header';
import Genres from '../Genres';
import ActiveSong from '../ActiveSong';
import SongsFromCurrentActiveGenreContainer from '../SongsFromCurrentActiveGenreContainer';
import NextCatogoryButton from '../NextCategoryButton';

const SongHuntAppView = ({
  currentActiveGenreData,
  currentScore,
  currentActiveSong,
  currentChoosedSong,
  songChoosed,
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
        currentChoosedSong={currentChoosedSong}
        songChoosed={songChoosed}/>
      <NextCatogoryButton />
    </div>
  </div>
);

export default SongHuntAppView;