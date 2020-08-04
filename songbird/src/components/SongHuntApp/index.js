import React from 'react';

import SongHuntAppView from './SongHuntAppView.jsx';

import {
  getRandomElementFromArray,
  findEqualObjectInArrayByProperty,
  playAudio,
} from '../../helpers/functions';

import soundEffectsData from '../../data/soundEffectsData';
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

  generateInitialState = () => ({
    currentActiveGenreData: { ...this.genresData[0] },
    currentActiveSong: { ...getRandomElementFromArray(this.genresData[0].songs) },
    currentScore: 0,
    currentChoosedSong: null,
    isAllGenresCompleted: false,
  })

  state = this.generateInitialState()

  songChoosed = (choosedSong) => {
    this.setState((state) => {
      const [
        originalChoosedSong,
        indexOfOriginalChoosedSong,
      ] = findEqualObjectInArrayByProperty(state.currentActiveGenreData.songs, choosedSong, 'id');
      if (
        (state.currentActiveGenreData.isCompleted)
        || (!state.currentActiveGenreData.isCompleted && originalChoosedSong.attempt !== null)
      ) {
        return {
          currentChoosedSong: { ...choosedSong },
        };
      } else {
        const isAttemptRight = originalChoosedSong.id === state.currentActiveSong.id;
        const newState = {
          currentActiveGenreData: {
            ...state.currentActiveGenreData,
            songs: [
              ...state.currentActiveGenreData.songs.slice(0, indexOfOriginalChoosedSong),
              { ...originalChoosedSong, attempt: isAttemptRight, },
              ...state.currentActiveGenreData.songs.slice(indexOfOriginalChoosedSong + 1),
            ],
            isCompleted: isAttemptRight,
          },
          currentScore: state.currentScore,
          currentChoosedSong: { ...choosedSong },
        };
        if (isAttemptRight) {
          const countOfAttempts = newState.currentActiveGenreData.songs.reduce((acc, song) => song.attempt === null ? acc : acc + 1, 0);
          newState.currentScore += newState.currentActiveGenreData.songs.length - countOfAttempts;
        }
        playAudio(isAttemptRight ? soundEffectsData.correctSoundEffect : soundEffectsData.wrongSoundEffect);
        return newState;
      }
    })
  }

  moveToNextCategory = () => {
    const [
      ,
      indexOfCurrentCategory,
    ] = findEqualObjectInArrayByProperty(this.genresData, this.state.currentActiveGenreData, 'id');
    if (this.genresData[indexOfCurrentCategory + 1] !== undefined) {
      this.setState({
        currentActiveGenreData: { ...this.genresData[indexOfCurrentCategory + 1] },
        currentActiveSong: { ...getRandomElementFromArray(this.genresData[indexOfCurrentCategory + 1].songs) },
        currentChoosedSong: null,
      })
    } else {
      this.setState({
        isAllGenresCompleted: true,
      });
    }
  }

  playAgain = () => {
    this.setState(this.generateInitialState());
  }

  render() {
    const {
      currentActiveGenreData,
      currentScore,
      currentActiveSong,
      currentChoosedSong,
      isAllGenresCompleted
    } = this.state;
    return <SongHuntAppView
      playAgain={this.playAgain}
      isAllGenresCompleted={isAllGenresCompleted}
      currentActiveGenreData={currentActiveGenreData}
      currentScore={currentScore}
      currentActiveSong={currentActiveSong}
      currentChoosedSong={currentChoosedSong}
      songChoosed={this.songChoosed}
      moveToNextCategory={this.moveToNextCategory}/>
  }
}

export default SongHuntApp;