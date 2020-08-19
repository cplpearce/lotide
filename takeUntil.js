const takeUntil = function(array, callback) {
  returnArray = [];
  for (const val of array) {
    if (callback(val)) break;
    returnArray.push(val); 
    }
  return returnArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

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

eqArrays(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
eqArrays(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);