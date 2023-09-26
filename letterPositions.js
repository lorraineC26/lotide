const letterPositions = function(sentence) {
  const results = {};

  for (let index = 0; index < sentence.length; index++) {
    let letter = sentence[index]; // stored as the exact letter "h", "e"... from the input

    if (results[letter]) { // when the letter from the input has alreday existed in the ouput obj
      results[letter].push(index); // add new positions
    } else { // when the letter appears for the first time
      results[letter] = [index];
    }
  }
  return results;
};
