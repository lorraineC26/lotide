// return an array showing the element at the middle position
const middle = function(array) {
  let middleArray = [];
  if (array.length % 2 !== 0 && array.length > 2) { // array with odd number of elements but not include arrays with one or two elements
    middleArray[0] = array[(array.length - 1) / 2];
  } else if (array.length % 2 === 0 && array.length > 2) { // array with even number of elements but not include arrays with one or two elements
    middleArray = array.slice(((array.length / 2) - 1), ((array.length / 2) + 1));
  }
  return middleArray;
};

module.exports = middle;