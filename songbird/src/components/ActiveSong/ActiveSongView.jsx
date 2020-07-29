import React from 'react';

import AudioPlayer from '../AudioPlayer';

const ActiveSongView = ({
  currentActiveSong,
  currentActiveGenreData,
}) => {
  const hideSong = !currentActiveGenreData.isCompleted;
  return (
    <div className="active-song-container">
      <img
        src={hideSong ? currentActiveGenreData.icon : currentActiveSong.cover}
        alt="song cover"
        className="active-song-container__cover"/>
      <div className="active-song-info-container">
        <p className="active-song-info-container__title">{hideSong ? '******' : currentActiveSong.title}</p>
          <AudioPlayer
            src={currentActiveSong.audioMinus}/>
      </div>
    </div>
  );
}

export default ActiveSongView;