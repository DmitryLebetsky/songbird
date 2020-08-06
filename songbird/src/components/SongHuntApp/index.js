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

  generateInitialState = () => {
    /* TODO: DELETE AFTER CROSSCHECK */
    const randomSong = { ...getRandomElementFromArray(this.genresData[0].songs) };
    console.log(`ПРАВИЛЬНЫЙ ОТВЕТ: ${randomSong.title}`);
    /**/
    return {
      currentActiveGenreData: { ...this.genresData[0] },
      currentActiveSong: randomSong,
      currentScore: 0,
      currentChoosedSong: null,
      isAllGenresCompleted: false,
    }
  }

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
          this.stopAudioPlayer(this.currentActiveSongAudioPlayerRef); // TODO: REMOVE AFTER CROSSCHECK
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
      /* TODO: DELETE AFTER CROSSCHECK */
      const randomSong = { ...getRandomElementFromArray(this.genresData[indexOfCurrentCategory + 1].songs) };
      console.log(`ПРАВИЛЬНЫЙ ОТВЕТ: ${randomSong.title}`);
      /**/
      this.setState({
        currentActiveGenreData: { ...this.genresData[indexOfCurrentCategory + 1] },
        currentActiveSong: randomSong,
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

  currentActiveSongAudioPlayerRef = React.createRef()
  currentChoosedSongAudioPlayerRef = React.createRef()

  stopAudioPlayer = (refToAudioPlayer) => { // TODO: REMOVE METHOD AFTER CROSSCHECK
    if (refToAudioPlayer.current) {
      refToAudioPlayer.current.audio.current.pause();
    }
  }

  render() {
    const {
      currentActiveGenreData,
      currentScore,
      currentActiveSong,
      currentChoosedSong,
      isAllGenresCompleted,
    } = this.state;

    return <SongHuntAppView
      playAgain={this.playAgain}
      isAllGenresCompleted={isAllGenresCompleted}
      currentActiveGenreData={currentActiveGenreData}
      currentScore={currentScore}
      currentActiveSong={currentActiveSong}
      currentChoosedSong={currentChoosedSong}
      songChoosed={this.songChoosed}
      moveToNextCategory={this.moveToNextCategory}
      currentActiveSongAudioPlayerRef={this.currentActiveSongAudioPlayerRef}
      currentChoosedSongAudioPlayerRef={this.currentChoosedSongAudioPlayerRef}
      onCurrentActiveSongAudioPlayerPlay={() => this.stopAudioPlayer(this.currentChoosedSongAudioPlayerRef)}
      onCurrentChoosedSongAudioPlayerPlay={() => this.stopAudioPlayer(this.currentActiveSongAudioPlayerRef)}/>
  }
}

export default SongHuntApp;