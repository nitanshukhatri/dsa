var isPalindrome = function (s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z0-9]/.test(s[i])) {
      str += s[i];
    }
  }
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
};
