const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(object, targetKey) {
  for (const key in object) {
    if (key === targetKey) return key;
  }
};

const myObject = {TV : 'Rick and Morty', Movie : 'Doctor Sleep'};
const result1 = findKeyByValue(myObject, 'Moviee');
const result2 = findKeyByValue(myObject, 'Movie');

assertEqual(result1, undefined);
assertEqual(result2, 'Movie');