//m = length of Array
//n = length of string
//O(m*n)
function groupAnagram(strs) {
  const anagrams = {};
  for (let s of strs) {
    var count = new Array(26).fill(0);
    for (let c of s) {
      console.log(c.charCodeAt(), "a".charCodeAt());
      count[c.charCodeAt() - "a".charCodeAt()] += 1;
    }

    if (count in anagrams) {
      anagrams[count].push(s);
    } else {
      anagrams[count] = [s];
    }
    console.log(anagrams);
  }
  return Object.values(anagrams);
}

console.log(groupAnagram(["eaat", "tea", "tan", "ate", "nat", "bat"]));
