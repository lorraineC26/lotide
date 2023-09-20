//test cases
without([1, 2, 3], [1]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])

//test original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]);