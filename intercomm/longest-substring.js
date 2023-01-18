// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  let unique = new Set();
  let left = 0;
  let res = 0;
  let output;

  for (let right = 0; right < s.length; right++) {
    while (unique.has(s[right])) {
      unique.delete(s[left]);
      left += 1;
    }
    unique.add(s[right]);
    console.log(unique);
    if (Math.max(res, right - left + 1) > res) {
      output = [...unique];
    }
    res = Math.max(res, right - left + 1);
  }
  console.log(output);
  return res;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
