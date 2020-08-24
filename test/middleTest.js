const middle = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {
  
  it("middle returns [1, 2] from [0, 1, 2, 3]", () => {
    assert.deepEqual(middle([0, 1, 2, 3]), [1, 2]);
  });
  
  it("middle returns '5' for ['5']", () => {
    assert.deepEqual(middle(['5']), 'No Middle Here Homie'); 
  });

  it("middle returns ['house'] for ['lima', 'house', 'lima']", () => {
    assert.deepEqual(middle(['lima', 'house', 'lima']), 'house');
  });

});