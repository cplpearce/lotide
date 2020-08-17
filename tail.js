const tail = function(array) {
  return array.slice(1);
};

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
};

const myArray = [1, 2, 3];

console.log(tail(myArray));
for (let i = 0; i < myArray.length - 1; i++) {
  assertEqual(tail(myArray)[i], myArray[i + 1]);
}