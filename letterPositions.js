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
  while (match) {
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] === expected[i]) continue;
      else match = false;
    }
    break;
  }
  return (match ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`));
};

const result = letterPositions('this is a test');
eqArrays(result['t'], [ 0, 10, 13 ]);