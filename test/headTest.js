const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("head returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
  it("head returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("head returns 'lima' for ['lima', 'house', 'lima']", () => {
    assert.strictEqual(head(['lima', 'house', 'lima']), 'lima');
  });
});

// assertEqual(head([1, 2, 3]), 1);
// assertEqual(head(['a', 'b', 'c']), 'a');
// assertEqual(head(['lima', 'house', 'lima']), 'l');
// assertEqual(head(['L', 'l', 'el']), 'l');