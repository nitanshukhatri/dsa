var isAnagram = function (s, t) {
    if(s.length ! = t.length){
        return false;
    }
  let counter1 = {};
  counter2 = {};
  for (let i = 0; i <= s.length - 1; i++) {
    if (counter1[s[i]]) {
      counter1[s[i]]++;
    } else {
      counter1[s[i]] = 1;
    }
    if (counter2[t[i]]) {
      counter2[t[i]]++;
    } else {
      counter2[t[i]] = 1;
    }
  }
  for (let c in counter1) {
    console.log(c);
    if (counter1[c] || 0 != counter2[c] || 0) {
      return false;
    }
  }
  return true;
  console.log(counter1, counter2);
};

console.log(isAnagram("a", "ab"));
