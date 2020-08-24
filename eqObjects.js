const eqObjects = (a, b) => {
  if (typeof a === 'object' && a !== null) {
    return Object.keys(a).every(k => eqObjects(a[k], b[k]));
  }
  if (a !== b) return false
  return true
}

module.exports = eqObjects;