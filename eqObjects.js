const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  let result = true;

  if (key1.length !== key2.length) { // if #keys are not the same
    result = false;
    return result;
  }

  for (const parameter1 of key1) {
    if (obj2[parameter1]) { // if the key in Obj1 is also present in Obj2
      if (Array.isArray(obj1[parameter1])) { // check if the value is array
        if (! eqArrays(obj1[parameter1], obj2[parameter1])) { // for array values, when the two are diff
          result = false;
          return result;
        }
      } else {
        if (obj1[parameter1] !== obj2[parameter1]) { // for non-array values; when the values of the same key are diff in two objects
          result = false;
          return result;
        }
      }
    } else { // when the key lengths are the same but the key doesn't match 比如：一个key是a b c，另个是a b d
      result = false;
      return result;
    }
  }
  return result;
};

module.exports = eqObjects;

