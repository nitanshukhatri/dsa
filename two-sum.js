const twoSum = function (nums, target) {
  let numsHash = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    console.log(difference);
    //  console.log(difference);
    if (difference in numsHash) {
      // console.log(i);
      // console.log(numsHash[difference]);
      // console.log([i, numsHash[difference]]);
      return [i, numsHash[difference]];
    } else {
      numsHash[nums[i]] = i;
      // console.log(numsHash);
    }
  }
  console.log(numsHash);
  return [];
};

console.log(twoSum([3, 2, 4], 6));
