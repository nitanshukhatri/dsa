var characterReplacement = function (s, k) {
  let count = {};
  let result = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (count[s[right]]) {
      count[s[right]]++;
    } else {
      count[s[right]] = 1;
    }
    let sizeOfWindow = right - left + 1;
    console.log("window", sizeOfWindow);
    console.log("map", Object.values(count));
    console.log("max", Math.max(...Object.values(count)));
    if (sizeOfWindow - Math.max(...Object.values(count)) > k) {
      count[s[left]] = count[s[left]] - 1;
      left++;
    }
    result = Math.max(result, right - left + 1);
    console.log("result", result);
  }
  return result;
};

console.log(characterReplacement((s = "AABABBA"), (k = 1)));
