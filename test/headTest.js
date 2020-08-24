const head = require('../head');
const assertEqual = require('../assertEqual');


assertEqual(head([1, 2, 3]), 1);
assertEqual(head(['a', 'b', 'c']), 'a');
assertEqual(head(['lima', 'house', 'lima']), 'l');
assertEqual(head(['L', 'l', 'el']), 'l');