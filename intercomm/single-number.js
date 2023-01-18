//https://www.youtube.com/watch?v=qMPX1AOa83k&ab_channel=NeetCode
//https://leetcode.com/problems/single-number/description/
var singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i <= nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};
console.log(singleNumber([4, 1, 2, 1, 2]));
