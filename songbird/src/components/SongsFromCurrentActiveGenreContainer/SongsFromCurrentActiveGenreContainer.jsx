import React from 'react';

import SongsListFromCurrentActiveGenre from '../SongsListFromCurrentActiveGenre';
import CurrentChoosedSong from '../CurrentChoosedSong';

const SongsFromCurrentGenreContainerView = ({
  songsFromCurrentActiveGenre,
  currentChoosedSong,
  songChoosed,
  currentChoosedSongAudioPlayerRef,
  onCurrentChoosedSongAudioPlayerPlay,
}) => (
  <div className="songs-from-current-active-genre-container">
    <SongsListFromCurrentActiveGenre
      songsFromCurrentActiveGenre={songsFromCurrentActiveGenre}
      currentChoosedSong={currentChoosedSong}
      songChoosed={songChoosed} />
    <CurrentChoosedSong
      onCurrentChoosedSongAudioPlayerPlay={onCurrentChoosedSongAudioPlayerPlay}
      currentChoosedSong={currentChoosedSong}
      currentChoosedSongAudioPlayerRef={currentChoosedSongAudioPlayerRef} />
  </div>
);

export default SongsFromCurrentGenreContainerView;