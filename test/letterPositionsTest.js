const letterPositions = require('../letterPositions');
const assert = require('chai').assert;


describe("#letterPositions", () => {
  
  it("letterPositions returns {t: 1, o: 2} from 'too'", () => {
    assert.deepEqual(letterPositions('too'), {t: [0], o: [1, 2]});
  });
  
  it("letterPositions returns {c: 0, l: 1, i: 2, n: 3, t: 5} from 'clint'", () => {
    assert.deepEqual(letterPositions('clint'), {c: [0], l: [1], i: [2], n: [3], t: [4]});
  });

  it("letterPositions returns {t: [0, 1, 3, 4, 5], f: [2, 6, 7, 8, 9]} from 'ttftttffff", () => {
    assert.deepEqual(letterPositions('ttftttffff'), {t: [0, 1, 3, 4, 5], f: [2, 6, 7, 8, 9]});
  });

});