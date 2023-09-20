//test case #1
let testResult = letterPositions("hello"); //or we can write: assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(testResult["h"], [0]);

//test case #2
assertArraysEqual(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18])
assertArraysEqual(letterPositions("lighthouse in the house")["e"], [9, 16, 22])
assertArraysEqual(letterPositions("lighthouse in the house")["u"], [7, 20])