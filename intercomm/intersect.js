var intersect = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let result = [];
  nums1.sort(function (a, b) {
    return a - b;
  });
  nums2.sort(function (a, b) {
    return a - b;
  });
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      result.push(nums1[i]);
      i++;
      j++;
    }
  }
  return result;
};

var intersect2 = function (nums1, nums2) {
  let map = {};
  let result = [];

  for (let idx of nums1) {
    if (!map[idx]) map[idx] = 1;
    else map[idx] = map[idx] + 1;
  }

  //iterate over second array and
  //if the value exists in the map,
  //then push it to results and decrease count by 1
  for (let idx of nums2) {
    if (map[idx] > 0) {
      result.push(idx);
      map[idx]--;
    }
  }
  return result;
};
