const without = function(array, comparable) {
  let newArr = [];
  array.forEach(val => !comparable.includes(val) && newArr.push(val));
  return newArr;
}

const eqArrays = function(actual, expected) {
  let match = true;
  for (const [i, val] of actual.entries()) {
    if (val !== expected[i]) match = false;
  }
  for (const [i, val] of expected.entries()) {
    if (val !== actual[i]) match = false;
  }
  return (match ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`));
};
