const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(tail([1, 2, 3]), [2, 3]);
assertArraysEqual(tail(['a', 'b', 'c']), ['b', 'c']);
assertArraysEqual(tail(['lima', 'house', 'lima']), ['house', 'lima']);