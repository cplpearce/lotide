const head = function(array) {
  return array[0];
};

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual(head([1, 2, 3]), 1);
assertEqual(head(['a', 'b', 'c']), 'a');
assertEqual(head(['lima', 'house', 'lima']), 'l');
assertEqual(head(['L', 'l', 'el']), 'l');