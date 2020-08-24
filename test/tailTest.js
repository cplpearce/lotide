const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  
  it("tail returns [1, 2, 3] from [0, 1, 2, 3]", () => {
    assert.deepEqual(tail([0, 1, 2, 3]), [1, 2, 3]);
  });
  
  it("tail returns '5' for ['5']", () => {
    assert.deepEqual(tail(['5']), ['5']); 
  });

  it("tail returns ['house', 'lima'] for ['lima', 'house', 'lima']", () => {
    assert.deepEqual(tail(['lima', 'house', 'lima']), ['house', 'lima']);
  });

});

// assertArraysEqual(tail([1, 2, 3]), [2, 3]);
// assertArraysEqual(tail(['a', 'b', 'c']), ['b', 'c']);
// assertArraysEqual(tail(['lima', 'house', 'lima']), ['house', 'lima']);