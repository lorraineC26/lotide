const assertEqual = require("../assertEqual");
const assert = require('chai').assert;

describe("#assertEqual function", () => {

  it("should return false for 'Lighthouse Lab' and 'Bootcamp", () => {
    assert.isFalse(assertEqual("Lighthouse Lab", "Bootcamp"));
  });

  it("should return false for 1 and 9", () => {
    assert.isFalse(assertEqual(1, 9));
  });

  it("should return true for 'life' and 'life'", () => {
    assert.isTrue(assertEqual("life", "life"));
  });

  it("should return true for 1 and 1", () => {
    assert.isTrue(assertEqual(1, 1));
  });
});