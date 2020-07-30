import React from 'react';
import classNames from 'classnames';

import rightMarkBlack from '../../assets/images/icons/marks-icons/right-mark-black.png';
import rightMarkWhite from '../../assets/images/icons/marks-icons/right-mark-white.png';
import wrongMarkBlack from '../../assets/images/icons/marks-icons/wrong-mark-black.png';
import wrongMarkWhite from '../../assets/images/icons/marks-icons/wrong-mark-white.png';

const mapAllSongsFromCurrentActiveGenreToItems = (songData, currentChoosedSong) => {
  const isSongChoosed = currentChoosedSong && currentChoosedSong.id === songData.id;
  const songFromCurrentActiveGenreContainerClasses = classNames({
    'song-from-current-active-genre-container': true,
    'song-from-current-active-genre-container_choosed': isSongChoosed,
  });
  const songFromCurrentActiveGenreCheckboxContainerClasses = classNames({
    'song-from-current-active-genre-checkbox-container': true,
    'song-from-current-active-genre-checkbox-container_choosed': isSongChoosed,
  });
  return (
    <li
      title={songData.title}
      key={songData.id}
      className={songFromCurrentActiveGenreContainerClasses}>
      <div className={songFromCurrentActiveGenreCheckboxContainerClasses}>
        {
          songData.attempt === null
          ? null
          : (
            <img 
              alt="check mark"
              className="song-from-current-active-genre-checkbox-container__mark"
              src={
                songData.attempt === true
                ? (
                  isSongChoosed ? rightMarkWhite : rightMarkBlack
                )
                : (
                  isSongChoosed ? wrongMarkWhite : wrongMarkBlack
                )
              } />
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
}) => (
  <ul className="songs-list-from-current-active-genre-container">
  {
    songsFromCurrentActiveGenre.map((songData) => mapAllSongsFromCurrentActiveGenreToItems(songData, currentChoosedSong))
  }
</ul>
);

export default SongsListFromCurrentActiveGenreView;