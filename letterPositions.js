const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') continue;
    results[sentence[i]] === undefined ? results[sentence[i]] = [i] : results[sentence[i]].push(i);
  }
  return results;
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

const result = letterPositions('this is a test');
eqArrays(result['t'], [ 0, 10, 13 ]);