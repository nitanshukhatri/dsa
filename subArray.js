const subarraysWithKDistinct = function (A, K) {
  return atMostK(A, K) - atMostK(A, K - 1);
};

function atMostK(A, K) {
  let count = {};
  let maxArr = 0,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < A.length; windowEnd++) {
    const rightInt = A[windowEnd];

    if (!(rightInt in count)) {
      count[rightInt] = 0;
    }

    if (count[rightInt] === 0) {
      K -= 1;
    }
    count[rightInt] += 1;

    while (K < 0) {
      const leftInt = A[windowStart];
      count[leftInt] -= 1;
      if (count[leftInt] === 0) {
        K += 1;
      }
      windowStart += 1;
    }
    maxArr += windowEnd - windowStart + 1;
  }

  return maxArr;
}

// function subarraysWithKDistinct(A, K) {
//   function atMostK(k) {
//     let l = 0;
//     let res = 0;
//     const count = {};

//     for (let r = 0; r < A.length; r++) {
//       if (count[A[r]] == null) count[A[r]] = 0;
//       if (count[A[r]] === 0) k--;
//       count[A[r]]++;

//       while (k < 0) {
//         count[A[l]]--;
//         if (count[A[l]] === 0) k++;
//         l++;
//       }
//       res += r - l + 1;
//     }
//     return res;
//   }

//   return atMostK(K) - atMostK(K - 1);
// }

console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 3));
