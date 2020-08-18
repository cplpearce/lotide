const eqArrays = function(actual, expected) {
  let match = true;
  while (match) {
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] === expected[i]) continue;
      else match = false;
    }
    break;
  }
  return (match ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`));
};

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
};

const middle = function(array) {
  if (array.length === 0 || array.length === 1 || array.length === 2) return 'No Middle Here Homie';
  return (Number.isInteger(array.length / 2)) ? [array.length / 2 - 1, array.length / 2] : Math.floor(array.length / 2);
};

const without = function(array, comparable) {
  let newArr = [];
  array.forEach(val => !comparable.includes(val) && newArr.push(val));
  return newArr;
};

const flatten = function(arrayOfArrays) {
  let returnArray = [];
  arrayOfArrays.forEach(val => Array.isArray(val) ? val.forEach(subVal => returnArray.push(subVal)) : returnArray.push(val));
  return returnArray;
};

const head = function(array) {
  return array[0];
};

const tail = function(array) {
  return array.slice(1);
};