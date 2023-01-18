var majorityElement = function (nums) {
  let count = 0;
  let res = 0;
  for (let n of nums) {
    if (count == 0) {
      res = n;
    }
    if (n == res) {
      count++;
    } else {
      count--;
    }
  }
  return res;
};
console.log(majorityElement([3, 3, 4]));
