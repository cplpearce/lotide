const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string) {
  results = {};
  for (let char of string) {
    (char.match(/\w/) !== null) && ((isNaN(results[char]) ? results[char] = 1 : results[char] += 1));
  }
  return results;
};

const result = countLetters('Thisss');
assertEqual(result['s'], {s : 3}.s);