import React from 'react';
import classNames from 'classnames';

import genresData from '../../data/genresData';

const mapGenresDataToItems = (genreData, currentActiveGenreData) => {
  const genreItemClasses = classNames({
    'genres-list__genre-title': true,
    'genres-list__genre-title_active': currentActiveGenreData.id === genreData.id,
  });
  return <li key={genreData.id} className={genreItemClasses}>{genreData.title}</li>;
}

const GenresView = ({
  currentActiveGenreData,
}) => (
  <ul className="genres-list">
    {
      genresData
        .map((genreData) => mapGenresDataToItems(genreData, currentActiveGenreData))
    }
  </ul>
);

export default GenresView;