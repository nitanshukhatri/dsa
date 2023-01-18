//https://www.youtube.com/watch?v=eMnyEDYGobA&ab_channel=AnujBhaiya
//https://leetcode.com/problems/edit-distance/
const editDistance = (a, b) => {
  let m = a.length;
  let n = b.length;

  let dp = [];
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  console.log(dp);
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a.charAt(i - 1) == b.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]));
      }
    }
  }
  return dp[m][n];
};

console.log(editDistance("intention", "execution"));
