const letterPositions = function(sentence) {
  sentence = sentence.replace(/ /g, '');
  const results = {};
  const len = sentence.length;
  for (let i = 0; i < len; i++) {
    !results[sentence[i]] ? results[sentence[i]] = [i] : results[sentence[i]].push(i);
  }
  return results;
};

/*
 O U T P U T   F O R M A T
 console.log(letterPositions('this is a test')) ...

  {
  t: [ 0, 10, 13 ],
  h: [ 1 ],
  i: [ 2, 5 ],
  s: [ 3, 6, 12 ],
  a: [ 8 ],
  e: [ 11 ]
  }
*/

module.exports = letterPositions;