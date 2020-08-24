/*
flatten is a function which does something like this. Given an array with other arrays inside, it can flatten it into a single-level array.

Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
*/

const flatten = function(arrayOfArrays) {
  let returnArray = [];
  arrayOfArrays.forEach(val => Array.isArray(val) ? val.forEach(subVal => returnArray.push(subVal)) : returnArray.push(val));
  return returnArray;
};