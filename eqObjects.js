const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
};

const eqObjects = function(object1, object2) {
  for (let key in object1) {
    if (object1[key] !== object2[key]) return false;
  }
  for (let key in object2) {
    if (object1[key] !== object2[key]) return false;
  }
  return true;
};

// test data
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const ab2 = { a: "1", b: "2", c: "3"};
const ba2 = { b: "2", a: "1", c: 3 };
assertEqual(eqObjects(ab2, ba2), true); // => true