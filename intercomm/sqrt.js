var mySqrt = function (x) {
  let low = 1;
  let ans = -1;
  let high = x;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log();
    let sqr = mid * mid;
    if (sqr === x) {
      return mid;
    } else if (sqr < x) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
};

console.log(mySqrt(4));
