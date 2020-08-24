const middle = function(array) {
  if (array.length === 0 || array.length === 1 || array.length === 2) return 'No Middle Here Homie';
  return (Number.isInteger(array.length / 2)) ? [array[array.length / 2 - 1], array[array.length / 2]] : array[Math.floor(array.length / 2)];
};

module.exports = middle;