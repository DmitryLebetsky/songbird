import React from 'react';
import classNames from 'classnames';

const mapAllSongsFromCurrentActiveGenreToItems = (songData, currentChoosedSong, songChoosed) => {
  const isSongChoosed = currentChoosedSong && currentChoosedSong.id === songData.id;
  const songFromCurrentActiveGenreContainerClasses = classNames({
    'song-from-current-active-genre-container': true,
    'song-from-current-active-genre-container_choosed': isSongChoosed,
  });
  const checkMarkItemClasses = classNames({
    "song-from-current-active-genre-checkbox-container__mark": true,
    "song-from-current-active-genre-checkbox-container__mark_right": songData.attempt === true,
    "song-from-current-active-genre-checkbox-container__mark_wrong": songData.attempt === false,
  })
  return (
    <li
      onClick={() => songChoosed(songData)}
      title={songData.title}
      key={songData.id}
      className={songFromCurrentActiveGenreContainerClasses}>
      <div className="song-from-current-active-genre-checkbox-container">
        {
          songData.attempt === null
          ? null
          : (
            <div className={checkMarkItemClasses} />
          )
        }
      </div>
      <p className="song-from-current-active-genre-container__title">{songData.title}</p>
    </li>
  )
}

const SongsListFromCurrentActiveGenreView = ({
  songsFromCurrentActiveGenre,
  currentChoosedSong,
  songChoosed,
}) => (
  <ul className="songs-list-from-current-active-genre-container">
    {
      songsFromCurrentActiveGenre
        .map((songData) => mapAllSongsFromCurrentActiveGenreToItems(songData, currentChoosedSong, songChoosed))
    }
  </ul>
);

export default SongsListFromCurrentActiveGenreView;