/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// a+b+c =0
// b+c = -a
// https://www.youtube.com/watch?v=onLoX6Nhvmg&ab_channel=takeUforward
var threeSum = function (nums) {
  const result = [];
  nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let start = i + 1;
      let end = nums.length - 1;

      let sum = 0 - nums[i];

      while (start < end) {
        if (nums[start] + nums[end] === sum) {
          result.push([nums[start], nums[end], nums[i]]);
          while (start < end && nums[start] === nums[start + 1]) start++;
          start++;
          while (start < end && nums[end] === nums[end - 1]) end--;
          end--;
        } else if (nums[start] + nums[end] < sum) {
          while (start < end && nums[start] === nums[start + 1]) start++;
          start++;
        } else {
          //  while(start < end && nums[end] === nums[end - 1]) end--;
          end--;
        }
      }
    }
  }
  return result;
};
