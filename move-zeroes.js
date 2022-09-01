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

const move = (nums) => {
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[c]] = [nums[c], nums[i]];
      c++;
    }
  }
  return nums;
};

console.log(moveZeroes([8, 5, 0, 10, 0, 20]));
console.log(move([8, 5, 0, 10, 0, 20]));
