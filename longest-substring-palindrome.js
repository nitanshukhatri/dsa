//Brute Force

function isPalindrome(s) {
  //   let startPointer = 0;
  //   let endPointer = s.length - 1;
  //   let isPalindrome = true;
  //   while (startPointer < endPointer) {
  //     if (!s.charAt(startPointer) === s.charAt(endPointer)) {
  //       isPalindrome = false;
  //       break;
  //     }
  //     startPointer++;
  //     endPointer--;
  //   }
  //   return isPalindrome;
  return s === s.split("").reverse().join("");
}

function longestPalindrome(s) {
  let maxPalindrome = "";
  for (let i = 0; i <= s.length - 1; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let substr = s.substring(i, j);
      console.log("check:" + substr);
      if (isPalindrome(substr)) {
        console.log("isPalindrome:" + substr);
        if (substr.length > maxPalindrome.length) {
          maxPalindrome = substr;
        }
      }
    }
    console.log("---");
  }
  return maxPalindrome;
}

const testcase = "cccaba";
console.log(longestPalindrome(testcase));
