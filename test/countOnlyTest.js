const countOnly = require('../countOnly');
const assert = require('chai').assert;


describe("#countOnly", () => {
  
  it("countOnly returns {clint: 1} from ['clint', 'izzy', 'greg]", () => {
    assert.deepEqual(countOnly(['clint', 'izzy', 'greg'], {clint : true}), {clint: 1});
  });
  
  it("countOnly returns {clint: 1, izzy: 1} from ['clint', 'izzy', 'greg]", () => {
    assert.deepEqual(countOnly(['clint', 'izzy', 'greg'], {izzy: true, clint : 1}), {clint: 1, izzy: 1});
  });

  it("countOnly returns {izzy : 2} from ['izzy', 'izzy', 'IZZY']", () => {
    assert.deepEqual(countOnly(['izzy', 'izzy', 'IZZY'], {izzy : true}), {izzy : 2});
  });

});