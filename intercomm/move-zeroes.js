const moveZeroes = (nums) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      console.log(nums);
      nums.push(0);
    }
  }
  return nums;
};
// https://www.youtube.com/watch?v=aayNRwUN3Do&t=465s&ab_channel=NeetCode
const move = (nums) => {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      left++;
    }
  }
  return nums;
};

console.log(moveZeroes([8, 5, 0, 10, 0, 20]));
console.log(move([8, 5, 0, 10, 0, 20]));
