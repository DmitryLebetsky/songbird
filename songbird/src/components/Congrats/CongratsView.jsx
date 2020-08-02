import React from 'react';

import PlayAgainButton from '../PlayAgainButton';

import { getMaxScoreValue } from '../../helpers/functions';


const CongratsView = ({
  currentScore,
  playAgain,
}) => (
  <div className="congrats-container">
    <h2 className="congrats-container__title">Congrats!</h2>
    <p className="congrats-container__subtitle">{`You passed the quiz and scored ${currentScore} out of ${getMaxScoreValue()} possible points. Try to achieve the perfect result to get a special congratulation ;)`}</p>
    <PlayAgainButton
      onClick={playAgain}
      isButtonNeon={true}
      className="congrats-container__play-again-button"/>
  </div>
);

export default CongratsView;