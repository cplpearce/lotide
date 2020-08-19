/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(actual, expected) {
  let match = true;
  for (const [i, val] of actual.entries()) {
    if (val !== expected[i]) match = false;
  }
  return (match ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`));
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[2]);
const results4 = map(words, word => word[3]);

console.log(eqArrays(results1, ['g', 'c', 't', 'm', 't']));
console.log(eqArrays(results2, ['r', 'o', 'o', 'a', 'o']));
console.log(eqArrays(results3, ['o', 'n', undefined, 'j', 'm']));
console.log(eqArrays(results4, ['u', 't', undefined, 'o', undefined]));