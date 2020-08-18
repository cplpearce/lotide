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
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false