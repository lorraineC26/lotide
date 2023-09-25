const assertEqual = require("../assertEqual");
const tail = require("../tail");

//test case 1
const result1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result1.length, 2); // ensure we get back two elements
assertEqual(result1[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result1[1], "Labs"); // ensure second element is "Labs"

//test case 2
const words1 = ["Yo Yo", "Lighthouse", "Labs"];
tail(words1); // no need to capture the return value since we are not checking it
assertEqual(words1.length, 3); // original array should still have 3 elements!

//test case 3
const words2 = ["justMe"];
const result2 = tail(words2);
assertEqual(result2.length, 0); //An array with only one element should yield an empty array for its tail
assertEqual(result2[0], undefined);