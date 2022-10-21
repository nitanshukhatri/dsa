const maxSlidingWindow = function (nums, k) {
  //   let max = 0;
  //   let output = [];
  //   let windowSize = nums.length - k + 1;
  //   for (let i = 0; i < windowSize; i++) {
  //     max = nums[i];
  //     for (let j = 1; j < k; j++) {
  //       max = Math.max(max, nums[i + j]);
  //     }
  //     output[i] = max;
  //   }
  //   return output;

  ///2
  //   const res = [];
  //   const q = []; // keep the current max index in array, desc
  //   const n = nums.length;

  //   for (let i = 0; i < n; i++) {
  //     // remove smaller tail indexes in queue
  //     //console.log(nums[i], nums[q[q.length - 1]]);
  //     while (q.length > 0 && nums[i] > nums[q[q.length - 1]]) {
  //       q.pop();
  //     }
  //     q.push(i);
  //     //console.log(q);

  //     // console.log(que);

  //     // check current max is in range K
  //     console.log(q[0], i - k);
  //     console.log("que", q);
  //     if (q[0] <= i - k) {
  //       q.shift();
  //       console.log("here");
  //     }

  //     // calc result
  //     if (i >= k - 1) {
  //       res.push(nums[q[0]]);
  //     }
  //   }

  //   return res;

  let res = [];
  let queue = [];
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] > queue[queue.length - 1]) {
      console.log(queue);
      console.log(queue[queue.length - 1]);
      queue.pop();

      console.log(queue);
    }
    queue.push(nums[i]);
    //console.log(queue);

    if (i >= k - 1) {
      res.push(queue[0]);
      //console.log("result", res);
      if (nums[i - k + 1] == queue[0]) queue.shift();
    }
  }
  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
