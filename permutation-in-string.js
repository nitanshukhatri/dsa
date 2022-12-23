var checkInclusion = function (s1, s2) {
  if (s2.length < s1) return false;

  const map = new Map();

  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], map.get(s1[i]) + 1 || 1);
  }
  //console.log(map);

  let left = 0;
  let right = 0;
  let valid = 0;

  while (right < s2.length) {
    const addChar = s2[right];
    console.log(addChar);
    right++;
    if (map.has(addChar)) {
      map.set(addChar, map.get(addChar) - 1);
      if (map.get(addChar) === 0) {
        valid++;
      }
    }

    while (valid === map.size) {
      if (right - left === s1.length) return true;

      const removeChar = s2[left];
      left++;
      if (map.has(removeChar)) {
        if (map.get(removeChar) === 0) {
          valid--;
        }
        map.set(removeChar, map.get(removeChar) + 1);
      }
    }
  }

  return false;
};
(s1 = "ab"), (s2 = "eidbaooo");
console.log(checkInclusion(s1, s2));
