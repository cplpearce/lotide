const flatten = function(arrayOfArrays) {
  let returnArray = [];
  arrayOfArrays.forEach(val => Array.isArray(val) ? val.forEach(subVal => returnArray.push(subVal)) : returnArray.push(val));
  return returnArray;
};

module.exports = flatten;