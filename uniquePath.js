function numPaths(m, n) {
  const result = Array(m)
    .fill(0)
    .map((_) => Array(n).fill(0));
  console.log(result);
  // iterating over each of the rows
  for (let i = 0; i < m; ++i) {
    // Getting the total for the current square
    for (let j = 0; j < n; ++j) {
      if (i == 0 || j == 0) {
        result[i][j] = 1;
      } else {
        result[i][j] = result[i][j - 1] + result[i - 1][j];
      }
    }
  }
  // Return the bottom right hand value that has the total.
  return result[m - 1][n - 1];
}

console.log(numPaths(3, 7));
