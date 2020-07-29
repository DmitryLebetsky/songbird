import React from 'react';

import SongHuntAppView from './SongHuntAppView.jsx';

import getRandomElementFromArray from '../../helpers/functions';
import genresData from '../../data/genresData';

class SongHuntApp extends React.Component {
  prepareGenresDataForGame = (genresData) => (
    genresData.map((genreData) => {
      return {
        ...genreData,
        isCompleted: false,
        songs: genreData.songs.map((songData) => ({
          ...songData,
          attempt: null,
        }))
      }
    })
  )

  genresData = this.prepareGenresDataForGame(genresData)

  state = {
    currentGenresData: this.genresData,
    currentActiveGenreData: this.genresData[0],
    currentActiveSong: getRandomElementFromArray(this.genresData[0].songs),
    currentScore: 0,
  }

  render() {
    const {
      currentActiveGenreData,
      currentScore,
      currentActiveSong,
    } = this.state;
    console.log(currentActiveSong);
    return <SongHuntAppView
      currentActiveGenreData={currentActiveGenreData}
      currentScore={currentScore}
      currentActiveSong={currentActiveSong}/>
  }
}

export default SongHuntApp;