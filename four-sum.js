var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let a = i,
        b = j,
        c = j + 1,
        d = nums.length - 1;
      while (c < d) {
        let sum = nums[a] + nums[b] + nums[c] + nums[d];
        if (sum > target) d--;
        else if (sum < target) c++;
        else {
          result.push([nums[a], nums[b], nums[c], nums[d]]);
          while (nums[j] === nums[j + 1]) j++;
          while (nums[c] === nums[c + 1]) c++;
          while (nums[d] === nums[d - 1]) d--;
          c++;
          d--;
        }
      }
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return result;
};
