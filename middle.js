const middle = function(array) {
  if (array.length === 0 || array.length === 1 || array.length === 2) return 'No Middle Here Homie';
  return (Number.isInteger(array.length / 2)) ? [array.length / 2 - 1, array.length / 2] : Math.floor(array.length / 2);
};

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

eqArrays(middle([0, 1, 2]), 1);