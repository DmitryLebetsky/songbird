import React from 'react';

import SongsListFromCurrentActiveGenre from '../SongsListFromCurrentActiveGenre';
import CurrentChoosedSong from '../CurrentChoosedSong';

const SongsFromCurrentGenreContainerView = ({
  songsFromCurrentActiveGenre,
  currentChoosedSong,
  songChoosed,
}) => (
  <div className="songs-from-current-active-genre-container">
    <SongsListFromCurrentActiveGenre
      songsFromCurrentActiveGenre={songsFromCurrentActiveGenre}
      currentChoosedSong={currentChoosedSong}
      songChoosed={songChoosed} />
    <CurrentChoosedSong
      currentChoosedSong={currentChoosedSong} />
  </div>
);

export default SongsFromCurrentGenreContainerView;