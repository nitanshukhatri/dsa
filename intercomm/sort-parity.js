var sortArrayByParity = function (nums) {
  let l = 0;

  for (r = 0; r < nums.length; r++) {
    if (nums[r] % 2 === 0) {
      let temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
    }
  }
  return nums;
};
