// the two functions below are for testing
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

const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};


const letterPositions = function (sentence) {
  const results = {};

  for (let index = 0; index < sentence.length; index++) {
    let letter = sentence[index]; // stored as the exact letter "h", "e"... from the input

    if (results[letter]) { // when the letter from the input has alreday existed in the ouput obj
      results[letter].push(index); // add new positions
    } else { // when the letter appears for the first time
      results[letter] = [index]; 
    }
  }
  return results;
};
