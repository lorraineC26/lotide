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

//test cases: