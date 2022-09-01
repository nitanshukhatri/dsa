// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

let maxProduct = function (nums) {
  let result = nums[0];
  let min = nums[0];
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      const temp = min;
      min = max;
      max = temp;
    }
    max = Math.max(nums[i], max * nums[i]);
    console.log(max);
    min = Math.min(nums[i], min * nums[i]);
    console.log("min", min);
    result = Math.max(result, max);
    console.log("result", result);
  }
  return result;
};

console.log(maxProduct([2, 3, -2, 4]));
