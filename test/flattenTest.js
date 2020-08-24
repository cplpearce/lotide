const flatten = require('../flatten');
const assert = require('chai').assert;


describe("#flatten", () => {
  
  it("flatten returns [1, 2, 3] from [1, 2, [3]]", () => {
    assert.deepEqual(flatten([1, 2, [3]]), [1, 2, 3]);
  });
  
  it("flatten returns [4, 5] for [4, [5]]", () => {
    assert.deepEqual(flatten([4, [5]]), [4, 5]); 
  });

  it("flatten returns ['house', 'lima'] for ['house', ['lima']]", () => {
    assert.deepEqual(flatten(['house', ['lima']]), ['house', 'lima']);
  });

});