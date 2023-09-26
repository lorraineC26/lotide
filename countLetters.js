// sentence: a string; return a count of each of the letters in that sentence.
const countLetters = function(sentence) {
  const result = {};
  let senWithoutSpace = sentence.replace(/ /g, ""); //remove all the space from the string; https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript

  for (const letter of senWithoutSpace) {
    if (result[letter]) {
      result[letter] ++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
