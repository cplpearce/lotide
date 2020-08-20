/*
implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*/

// v1
const findKey = function(obj, keyArg) {
  // Object.keys(obj).forEach(key => console.log(key, obj[key]));
  for (const key in obj) {
    // console.log(key, obj[key]);
    if (keyArg(obj[key])) return key;
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"