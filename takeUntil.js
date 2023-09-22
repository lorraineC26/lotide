// collecting items from the array until the callback is true and return a new array
const takeUntil = function (array, callback) {
  let results = [];
  for (const item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
}