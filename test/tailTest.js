const tail = require("../tail");
const assert = require('chai').assert;

describe("#tail function", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [] for ['justMe']", () => {
    assert.deepEqual(tail(["justMe"]), []);
  });

});