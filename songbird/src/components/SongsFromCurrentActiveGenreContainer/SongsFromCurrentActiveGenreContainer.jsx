import React from 'react';

import SongsListFromCurrentActiveGenre from '../SongsListFromCurrentActiveGenre';
import CurrentChoosedSong from '../CurrentChoosedSong';

const SongsFromCurrentGenreContainerView = ({
  currentChoosedSong,
  songChoosed,
  currentChoosedSongAudioPlayerRef,
  onCurrentChoosedSongAudioPlayerPlay,
  currentActiveGenreData,
}) => (
  <div className="songs-from-current-active-genre-container">
    <SongsListFromCurrentActiveGenre
      songsFromCurrentActiveGenre={currentActiveGenreData.songs}
      currentChoosedSong={currentChoosedSong}
      songChoosed={songChoosed} />
    <CurrentChoosedSong
      isCurrentActiveGenreCompleted={currentActiveGenreData.isCompleted}
      onCurrentChoosedSongAudioPlayerPlay={onCurrentChoosedSongAudioPlayerPlay}
      currentChoosedSong={currentChoosedSong}
      currentChoosedSongAudioPlayerRef={currentChoosedSongAudioPlayerRef} />
  </div>
);

export default SongsFromCurrentGenreContainerView;