const reverse = (num, low, high) => {
  while (low < high) {
    [num[low], num[high]] = [num[high], num[low]];
    low++;
    high--;
  }
};
const rotate = (nums, k) => {
  let n = nums.length;
  reverse(nums, 0, n - k - 1);
  reverse(nums, n - k, n - 1);
  reverse(nums, 0, n - 1);
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
