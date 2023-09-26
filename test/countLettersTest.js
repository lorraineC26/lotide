const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("countLetters function", () => {
  it("should return 1 for 'l'", () => {
    assert.strictEqual(countLetters("lighthouse in the house").l, 1);
  });
});

// countLetters("lighthouse in the house");
// assertEqual(testResult["l"], 1)
// assertEqual(testResult["i"], 2)
// assertEqual(testResult["h"], 4)
// assertEqual(testResult["z"], undefined)