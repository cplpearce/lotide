const without = function(array, comparable) {
  let newArr = [];
  array.forEach(val => !comparable.includes(val) && newArr.push(val));
  return newArr;
}
// pass two arrays, get array 1 minus array 2.
console.log(without([1, 2, 3], [1]));