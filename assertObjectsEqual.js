const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  actual === expected ? console.log(`👍 Assertion Passed: ${inspect(ab)} === ${inspect(ba)}`) : console.log(`⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const eqObjects = function(object1, object2) {
  for (let key in object1) {
    if (object1[key] !== object2[key]) return false; // does A === B
  }
  for (let key in object2) {
    if (object1[key] !== object2[key]) return false; // because B might !== A
  }
  return true;
};

// test data
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false