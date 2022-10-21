var removeDuplicates = function (nums) {
  //   const checkDup = {};
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     checkDup[nums[i]] = 1;
  //     if (checkDup[nums[i]]) {
  //       checkDup[nums[i]]++;
  //       nums.splice(i, 1);
  //     }
  //   }
  //   console.log(checkDup);
  //   return nums;

  let rm = [...new Set(nums)];
  console.log(rm);
  nums.length = 0;
  return rm;
  for (let num of rm) {
    nums.push(num);
  }
  return nums;
};

console.log(removeDuplicates([1, 1, 2]));
