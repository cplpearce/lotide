const middle = function(array) {
  if (array.length === 0 || array.length === 1 || array.length === 2) return 'No Middle Here Homie';
  return (Number.isInteger(array.length / 2)) ? [array.length / 2 - 1, array.length / 2] : Math.floor(array.length / 2);
};

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

console.log(eqArrays(middle([0, 1, 2]), 1));