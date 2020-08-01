import React from 'react';

import Header from '../Header';
import Genres from '../Genres';
import ActiveSong from '../ActiveSong';
import SongsFromCurrentActiveGenreContainer from '../SongsFromCurrentActiveGenreContainer';
import NextCatogoryButton from '../NextCategoryButton';
import Congrats from '../Congrats';

const SongHuntAppView = ({
  currentActiveGenreData,
  currentScore,
  currentActiveSong,
  currentChoosedSong,
  songChoosed,
  moveToNextCategory,
  isAllGenresCompleted,
}) => (
  <div className={`songhunt-app-container theme-${currentActiveGenreData.title.toLocaleLowerCase().replace(/&/, 'and')}`}>
      {
        isAllGenresCompleted
        ? (
          <Congrats />
        )
        : (
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

            <NextCatogoryButton
            disabled={!currentActiveGenreData.isCompleted}
            moveToNextCategory={moveToNextCategory}/>
          </div>
        )
      }
  </div>
);

export default SongHuntAppView;