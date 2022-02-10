
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  let a = [];
  for (i = 0; i < matrix.length; i++) {
    if ((i + 1) % 2 == 0) {
      matrix[i] = matrix[i].reverse();
    }
    a = a.concat(matrix[i]);
  }
  return a;
}
