//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
var searchRange = function (nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] == target) {
      let low = mid,
        high = mid;

      while (low >= 0 && nums[low] == target) low--;

      while (high < nums.length && nums[high] == target) high++;

      return [low + 1, high - 1];
    } else if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return [-1, -1];
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
//Output :[3,4]
