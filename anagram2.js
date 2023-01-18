function getAnagramPeriod(s) {
  // Write your code here
  let n = s.length;
  let mp = new Map();

  // loop for length of substring
  for (let i = 0; i < n; i++) {
    let sb = "";
    for (let j = i; j < n; j++) {
      sb = (sb + s[j]).split("").sort().join("");
      if (mp.has(sb)) mp.set(sb, mp.get(sb) + 1);
      // increase count corresponding
      // to this dict array
      else mp.set(sb, 1);
    }
  }

  let anas = 0;

  // loop over all different dictionary
  // items and aggregate substring count
  for (let [k, v] of mp) {
    anas += Math.floor((v * (v - 1)) / 2);
  }
  console.log(mp);
  return anas;
}

console.log(getAnagramPeriod("abcbcacba"));
