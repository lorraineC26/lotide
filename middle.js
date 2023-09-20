function eqArrays(arrOne, arrTwo) {
  let ans = true;
  for (let index = 0; index < arrOne.length; index++) {
    if (arrOne[index] !== arrTwo[index]) {
      ans = false;
      return ans;
    }
  }
  return ans;
}

// assertArraysEqual for testing our new function
const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

// return an array showing the element at the middle position
function middle(array) {  
  let middleArray = [];
  if (array.length % 2 !== 0 && array.length > 2) { // array with odd number of elements but not include arrays with one or two elements
    middleArray = array[(array.length - 1) / 2];
  } else if (array.length % 2 === 0 && array.length > 2) { // array with even number of elements but not include arrays with one or two elements
    middleArray = array.slice(((array.length / 2) - 1), ((array.length / 2) + 1));
  }
  return middleArray;
}

