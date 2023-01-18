var topKFrequent = function (nums, k) {
  const hash = {};
  for (const num of nums) {
    hash[num] ? hash[num]++ : (hash[num] = 1);
  }
  console.log(Object.entries(hash));
  console.log(
    Object.entries(hash)
      .sort((a, b) => a[1] - b[1])
      .slice(-k)
  );
  return Object.entries(hash)
    .sort((a, b) => a[1] - b[1])
    .slice(-k)
    .map((item) => item[0]);
};
console.log(topKFrequent([1, 1, 4, 2, 2, 3], 2));
