const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// sentence: a string; return a count of each of the letters in that sentence.
function countLetters(sentence) {
  const result = {};
  senWithoutSpace = sentence.replace(/ /g, ""); //remove all the space from the string; https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript

  for (const letter of senWithoutSpace) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1
    }
  }
  return result;
}

//test codes go below