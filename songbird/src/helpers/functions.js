const getRandomElementFromArray = (array) => array[Math.floor(Math.random() * array.length)];

const findEqualObjectInArrayByProperty = (array, object, property) => {
  const targetObject = array.find((objectFromArray) => objectFromArray[property] === object[property]);
  const indexOfTargetObject = array.indexOf(targetObject);
  return [
    targetObject,
    indexOfTargetObject,
  ]
};

export {
  getRandomElementFromArray,
  findEqualObjectInArrayByProperty,
};