// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// const minSubArrayLen = function (target, nums) {
//   const map = {};
//   const output = [];
//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];
//     console.log(diff);
//     if (map[diff]) {
//       output.push([nums[i], diff]);
//     } else {
//       if (map[nums[i]]) {
//         map[nums[i]]++;
//       } else {
//         map[nums[i]] = 1;
//         if (target === nums[i]) {
//           output.push([nums[i]]);
//         }
//       }
//     }
//   }
//   console.log(map);
//   console.log(output);
//   let min = Infinity;
//   let ans;
//   if (output.length) {
//     for (let k = 0; k < output.length; k++) {
//       if (output[k].length < min) {
//         ans = output[k].length;
//         min = output[k].length;
//       }
//     }
//   } else {
//     ans = 0;
//   }
//   return ans;
// };
//https://www.youtube.com/watch?v=GLpB03voaCs&ab_channel=ShashwatTiwari
const minSubArrayLen = function (target, nums) {
  //   let end = Number.MAX_SAFE_INTEGER;
  //   let left = 0;
  //   let sum = 0;
  //   // left pointer and right pointer defines the window.
  //   // the goal is to find the smallest window that has a sum of s or larger.
  //   for (let i = 0; i < nums.length; i++) {
  //     sum += nums[i];
  //     while (sum >= s) {
  //       end = Math.min(end, i - left + 1);
  //       sum -= nums[left];
  //       left += 1;
  //     }
  //   }

  //   return end === Number.MAX_SAFE_INTEGER ? 0 : end;
  let start = 0,
    end = 1;
  let result = Number.MAX_SAFE_INTEGER;
  let sum = nums[start];
  if (sum >= target) {
    return 1;
  }
  if (end < nums.length) {
    sum = sum + nums[end];
  }
  while (start < nums.length && end < nums.length) {
    if (sum >= target) {
      console.log(sum);
      // upperlimit- lowerlimit+1;
      result = Math.min(result, end - start + 1);
      console.log(result);
      sum = sum - nums[start]; // remove from left
      start++;
      console.log("start", start);
    } else {
      end++;
      if (end < nums.length) {
        sum = sum + nums[end];
      }
    }
  }
  return result;
};

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
