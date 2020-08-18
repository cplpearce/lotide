const without = function(array, comparable) {
  let newArr = [];
  array.forEach(val => !comparable.includes(val) && newArr.push(val));
  return newArr;
}

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

console.log(without([1, 2, 3], [1]), without(["1", "2", "3"], [1, 2, "3"]));
