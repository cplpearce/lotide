const findKeyByValue = function(object, targetValueStr) {
  for (const key in object) {
    if (object[key] === targetValueStr) return key;
  }
};

module.exports = findKeyByValue;