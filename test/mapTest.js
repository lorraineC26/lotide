// below are the assertArraysEqual fx for testing
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

// test case#1 for map fx
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// test case#2 for map fx
const kpopArtists = ["ive", "new jeans", "kiss of life", "twice", "le sserafim"];
const results2 = map(kpopArtists, artist => artist[1]);
assertArraysEqual(results2, ['v', 'e', 'i', 'w', 'e']);

// test case#3 for map fx
const results3 = map(kpopArtists, artist => artist[artist.length - 1]);
assertArraysEqual(results3, ['e', 's', 'e', 'e', 'm'])