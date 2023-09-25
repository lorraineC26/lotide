const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅Assertion Passed: ${arrayOne} === ${arrayTwo}`);
    return true;
  } else {
    console.log(`❌Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
    return false;
  }
};

module.exports = assertArraysEqual;