const countOnly = function(arr, obj) {
  const results = {};
  for (const item of arr) {
    if (!obj[item]) continue;
    results[item] ? results[item]++ : results[item] = 1;
  }
  return results;
};

module.exports = countOnly;