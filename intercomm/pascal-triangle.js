//https://www.youtube.com/watch?v=LQUZYf-hr6M&ab_channel=AndyGala
var generate = function (numRows) {
  if (numRows < 1) return [];
  if (numRows === 1) return [[1]];

  const triangle = [[1]];
  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1];
    const currentRow = [];
    currentRow.push(1);
    for (let j = 1; j < prevRow.length; j++) {
      currentRow[j] = prevRow[j] + prevRow[j - 1];
    }
    currentRow.push(1);
    triangle.push(currentRow);
  }
  return triangle;
};

console.log(generate(3));
