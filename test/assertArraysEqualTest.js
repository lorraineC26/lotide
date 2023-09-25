const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

describe("#assertArraysEqual function", () => {
  it("should return true for [1, 2, 3] and [1, 2, 3]", () =>{
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it("should return false for [1, 2, 3] and [3, 2, 3]", () => {
    assert.isFalse(assertArraysEqual([1, 2, 3], [3, 2, 3]));
  });

  it("should return true for ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.isTrue(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
  });

  it("should return false for ['1', '3', '5'] and ['1','1', '2']", () => {
    assert.isFalse(assertArraysEqual(['1', '3', '5'], ['1', '1', '2']));
  });

});