import React from 'react';

import AudioPlayer from '../AudioPlayer';

const CurrentChoosedSongView = ({
  currentChoosedSong,
}) => (
  <div className="current-choosed-song-container">
    {
      currentChoosedSong
      ? (
        <>
          <div className="current-choosed-song-info-container">
            <img className="current-choosed-song-info-container__cover" src={currentChoosedSong.cover} alt="song cover"/>
            <div className="current-choosed-song-main-info-container">
              <p className="current-choosed-song-main-info-container__title">{currentChoosedSong.title}</p>
              <AudioPlayer
                className="choosed-song-audioplayer"
                src={currentChoosedSong.audio}/>
            </div>
          </div>
          <p className="current-choosed-song-info-container__description">{currentChoosedSong.description}</p>
        </>
      )
      : (
        <p className="current-choosed-song-container__no-choosed-song-title">Listen to the player and select a song from the list.</p>
      )
    }
  </div>
);

export default CurrentChoosedSongView;