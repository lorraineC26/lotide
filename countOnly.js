// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) { // iterate all the name listed in the provided array; the name appears only in the obj won't be counted in this way i.e., Karima
    if (itemsToCount[item]) { // if the name listed in the array is also present in the input object and showing true
      if (results[item]) { // if the name has already been included in the final result obj
        results[item] += 1;
      } else {
        results[item] = 1; // if the name hasn't yet been added to the final result obj
      }
    }
  }
  return results;
};

module.exports = countOnly;