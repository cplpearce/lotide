const eqArrays = function(a1, a2) {
  let match = true;
  const len = a1.length;
  if (a1.length !== a2.length) return false;
  for (let el = 0; el < len; el++) {
    if (Array.isArray(a1[el]) || Array.isArray(a2[el])) {
      match = match && eqArrays(a1[el], a2[el]);
    } else if (a1[el] !== a2[el]) {
      match = false;
    }
  }
  return match;
};

module.exports = eqArrays;