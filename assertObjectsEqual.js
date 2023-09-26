// to measure if the two given arrays are equal
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = require('./eqObjects');

//log Assertion Passed/Failed for two objects
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // import the library in order to use the util library's inspect function

  if (eqObjects(actual, expected)) {
    console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`); // the details of the objects can be shown
  } else {
    console.log(`❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;