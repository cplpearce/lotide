const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;


describe("#findKeyByValue", () => {
  
  it("findKeyByValue returns 'Movie' from {TV: 'R&M', Movie: 'Doctor Sleep'}", () => {
    assert.strictEqual(findKeyByValue({TV: 'R&M', Movie: 'Doctor Sleep'}, 'Doctor Sleep'), 'Movie');
  });
  
  it("findKeyByValue returns 1 from {1: 'Test', 2: 'File'}", () => {
    assert.strictEqual(findKeyByValue({1: 'Test', 2: 'File'}, 'Test'), '1');
  });
});