// the two coding blocks below are assertArraysEqual for testing
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


// test case#1:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // ==> [ 1, 2, 5, 7, 2 ]
assertArraysEqual(results1, [1, 2, 5, 7, 2])

console.log('---');

// test case#2:
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); // ==> [ 'I\'ve', 'been', 'to', 'Hollywood' ]
console.log(results2);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood'])
