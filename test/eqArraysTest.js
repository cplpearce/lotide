const eqArrays = require('../eqArrays');
const assert = require('chai').assert;


describe("#eqArrays", () => {
  
  it("eqArrays returns true from [1, 2] and [1, 2]", () => {
    assert.deepEqual(eqArrays([1, 2], [1, 2]), true);
  });

  it("eqArrays returns true from [1, 2, [3, 4]] and [1, 2, [3, 4]]", () => {
    assert.deepEqual(eqArrays([1, 2, [3, 4]], [1, 2, [3, 4]]), true);
  });
  it("eqArrays returns true from [1, [2, [3, 4]]] and [1, [2, [3, 4]]]", () => {
    assert.deepEqual(eqArrays([1, [2, [3, 4]]], [1, [2, [3, 4]]]), true);
  });
  it("eqArrays returns false from [2, [2, [3, 4]]] and [1, [2, [3, 4]]]", () => {
    assert.deepEqual(eqArrays([2, [2, [3, 4]]], [1, [2, [3, 4]]]), false);
  });
});