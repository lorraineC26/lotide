# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lorrainec26/lotide`

**Require it:**

`const _ = require('@lorrainec26/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element from a given array.
* `middle(array)`: returns an array contain the element at the middle position of a given array.
* `tail(array)`: returns an array contain all the element from the given array except for the first element.
* `countLetters(a string sentence)`: returns a count of each of the letters in that sentence.
* `countOnly(allItems, itemsToCount)`: returns an object contain only the specified item from all items.
* `findKey(object, callback)`: scans the object and returns the first key for which the callback returns a truthy value; If no key is found, then it should return undefined.
* `findKeyByValue(object, value)`: returns the key that has the same value as the given one.
* `letterPositions(a string sentence)`: returns an object which stores letter as keys and their corresponding index as values.
* `map(array, callback)`: returns a new array based on the results of the callback function.
* `takeUntil(array, callback)`: collects items from the array until the callback is true and returns a new array.
* `without(source, itemsToRemove)`: removes the specified items from a given array and returns a new array.
* `assertArraysEqual(arrayOne, arrayTwo)`: logs assertion Passed/Failed for two arrays. It will return true for PASS and false for FAILED.
* `assertEqual(actual, expected)`: logs assertion Passed/Failed for two items. It will return true for PASS and false for FAILED.
* `assertObjectsEqual(actual, expected)`: logs assertion Passed/Failed for two objects.
* `eqArrays(arrOne, arrTwo)`: returns true if two arrays are equal and false vice versa.
* `eqObjects(obj1, obj2)`: returns true if both objects have identical keys with identical values. Otherwise, it returns false.

