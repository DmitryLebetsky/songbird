import genresData from '../data/genresData';

const getRandomElementFromArray = (array) => array[Math.floor(Math.random() * array.length)];

const findEqualObjectInArrayByProperty = (array, object, property) => {
  const targetObject = array.find((objectFromArray) => objectFromArray[property] === object[property]);
  const indexOfTargetObject = array.indexOf(targetObject);
  return [
    targetObject,
    indexOfTargetObject,
  ]
};

const getMaxScoreValue = () => (
  genresData.reduce((acc, currentValue) => acc + currentValue.songs.length - 1, 0)
);

const playAudio = (src) => {
  const audio = new Audio(src);
  audio.play();
};

export {
  getRandomElementFromArray,
  findEqualObjectInArrayByProperty,
  getMaxScoreValue,
  playAudio,
};