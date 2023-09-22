// the function findKey takes in an object and a callback
// It should scan the object and return the first key for which the callback returns a truthy value.
// If no key is found, then it should return undefined.
const findKey = function(object, callback) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      if (callback(object[key])) { // e.g., object['Blue Hill'].stars will show 1
        return key;
      }
    }
  }
};
