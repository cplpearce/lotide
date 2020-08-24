const eqObjects = require('../eqObjects');
const assert = require('chai').assert;


describe("#eqObjects", () => {
  
  it("eqObjects returns true from {1: 2, 2: 1} and {2: 1, 1: 2}", () => {
    assert.deepEqual(eqObjects({1: 2, 2: 1}, {2: 1, 1: 2}), true);
  });

  it("eqObjects returns false from {1: 2, 2: 1} and {2: 2, 1: 1}", () => {
    assert.deepEqual(eqObjects({1: 2, 2: 1}, {2: 2, 1: 1}), false);
  });
  it("eqObjects returns true from {1: 2, 2: {1: 2}} and {1: 2, 2: {1: 2}}", () => {
    assert.deepEqual(eqObjects({1: 2, 2: {1: 2}}, {1: 2, 2: {1:2}}), true);
  });
});