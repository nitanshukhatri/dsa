var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  let start = 0,
    freq = {};

  for (let c of s1) {
    freq[c] = freq[c] ? freq[c] + 1 : 1;
  }

  for (let end = 0; end < s2.length; end++) {
    const rightChar = s2[end];

    if (rightChar in freq) {
      freq[rightChar]--;
    }
    //console.log(rightChar);
    console.log({ end, start, rightChar });

    if (end - start + 1 === s1.length) {
      console.log(Object.values(freq));
      if (Object.values(freq).reduce((p, c) => p || c, 0) === 0) {
        return true;
      }

      if (s2[start] in freq) {
        console.log(s2[start]);
        console.log(freq[s2[start]]);
        freq[s2[start]]++;
      }

      start++;
    }
  }

  return false;
};

const s1 = "bba";
const s2 = "eidbaooo";
const s4 = "eidboaoo";

console.log(checkInclusion(s1, s4));
