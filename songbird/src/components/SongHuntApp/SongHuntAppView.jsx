import React from 'react';
import classNames from 'classnames';

import Header from '../Header';
import Genres from '../Genres';
import ActiveSong from '../ActiveSong';
import SongsFromCurrentActiveGenreContainer from '../SongsFromCurrentActiveGenreContainer';
import NextCatogoryButton from '../NextCategoryButton';
import Congrats from '../Congrats';
import AbsoluteCongrats from '../AbsoluteCongrats';

import { getMaxScoreValue } from '../../helpers/functions';

const SongHuntAppView = ({
  currentActiveGenreData,
  currentScore,
  currentActiveSong,
  currentChoosedSong,
  songChoosed,
  moveToNextCategory,
  isAllGenresCompleted,
  playAgain,
  currentActiveSongAudioPlayerRef,
  currentChoosedSongAudioPlayerRef,
  onCurrentActiveSongAudioPlayerPlay,
  onCurrentChoosedSongAudioPlayerPlay,
}) => {
  const songhuntAppContainerClasses = classNames({
    'songhunt-app-container': true,
    [`theme-${currentActiveGenreData.title.toLocaleLowerCase().replace(/&/, 'and')}`]: true,
  });
  return (
    <div className={songhuntAppContainerClasses}>
        {
          isAllGenresCompleted
          ? (
            currentScore === getMaxScoreValue()
            ? <AbsoluteCongrats
                playAgain={playAgain}
                currentScore={currentScore} />
            : (
              <div className="songhung-app-wrapper">
                <Header
                currentScore={currentScore}/>
              
                <Genres
                  currentActiveGenreData={currentActiveGenreData}/>
  
                <Congrats
                  playAgain={playAgain}
                  currentScore={currentScore} />
              </div>
            )
          )
          : (
            <div className="songhung-app-wrapper">
              <Header
                currentScore={currentScore}/>
              
              <Genres
                currentActiveGenreData={currentActiveGenreData}/>
              
              <ActiveSong
                currentActiveGenreData={currentActiveGenreData}
                currentActiveSong={currentActiveSong}
                currentActiveSongAudioPlayerRef={currentActiveSongAudioPlayerRef}
                onCurrentActiveSongAudioPlayerPlay={onCurrentActiveSongAudioPlayerPlay}/>
  
              <SongsFromCurrentActiveGenreContainer
                songsFromCurrentActiveGenre={currentActiveGenreData.songs}
                currentChoosedSong={currentChoosedSong}
                songChoosed={songChoosed}
                currentChoosedSongAudioPlayerRef={currentChoosedSongAudioPlayerRef}
                onCurrentChoosedSongAudioPlayerPlay={onCurrentChoosedSongAudioPlayerPlay}/>
  
              <NextCatogoryButton
                disabled={!currentActiveGenreData.isCompleted}
                moveToNextCategory={moveToNextCategory}/>
            </div>
          )
        }
    </div>
  );
} 

export default SongHuntAppView;