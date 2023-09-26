const without = function(source, itemsToRemove) {
  let result = source.slice(); // create a copy of the original source array; https://stackoverflow.com/questions/76443186/tospliced-method-throwing-typeerror-in-vs-code-debug-console
  for (let index = 0; index < source.length; index++) {
    if (source[index] === itemsToRemove[index]) { // when the item we'd like to remove shows up
      result.splice(index, 1); // remove 1 element from the specified array[index]
    }
  }
  return result;
};

module.exports = without;
