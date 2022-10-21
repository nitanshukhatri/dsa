//[1,2,-1,3,-2] // Maximum sum subArray = 1, {1,2}, {1,2,3},{2,-1}

// const maxSum = (arr) => {
//   let result = 0;
//   let items =[];
//   for (let i = 0; i < arr.length; i++) {
//     let cur = 0;
//     for (let j = i; j < arr.length; j++) {
//       cur = cur + arr[j];
//      console.log(items.push())

//       //   console.log(arr[j]);
//       //console.log(cur);
//       result = Math.max(result, cur);
//       console.log(result);
//     }
//     console.log("break");
//   }
//   return result;
// };
// const maxSubArray = (nums) => {
//   // initiate two variable, maxSum for total max, sum for current max
//   let maxSum = 0;
//   let currentSum = 0;
//   // iterate through the nums, store sub-problems result
//   for (let i = 0; i < nums.length; i++) {
//     //cumulating answers to the top

//     //compare currentSum add current number
//     //with current number and store the maximum value

//     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     console.log(currentSum);

//     //compare maxSum with currentSum and store the greater value
//     maxSum = Math.max(currentSum, maxSum);
//   }
//   return maxSum;
// };

let maxSubArray = function (nums) {
  // let max_so_far = 0,
  //   max_ending_here = 0;
  // let startIndex = 0;
  // let endIndex = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] > max_ending_here + nums[i]) {
  //     startIndex = i;
  //     max_ending_here = nums[i];
  //   } else {
  //     max_ending_here = max_ending_here + nums[i];
  //     //console.log(max_ending_here, startIndex);
  //   }

  //   if (max_so_far < max_ending_here) {
  //     max_so_far = max_ending_here;
  //     endIndex = i;
  //     console.log(max_so_far, endIndex);
  //   }
  // }
  // //   console.log(startIndex);
  // return nums.slice(startIndex, endIndex + 1);

  let maxSum = Number.MIN_SAFE_INTEGER;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum = currentSum + nums[i];
    maxSum = Math.max(currSum, maxSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};

// console.log(maxSubArray([1, 2, -1, 3, -2]));
console.log(maxSubArray([-1]));
