/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (str) {
  let unique = {};
  for (let i = 0; i < str.length; i++) {
    if (unique[str[i]]) {
      unique[str[i]]++;
    } else {
      unique[str[i]] = 1;
    }
  }
  console.log(unique);
  let val = -1;
  for (const key in unique) {
    if (unique[key] == 1) {
      console.log(key);
      val = str.indexOf(key);
      return val;
    }
  }
  return val;
};
