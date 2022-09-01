function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
function reverseString1(str) {
  return str.split("").reverse().join("");
}

function reverseString2(str) {
  console.log(str, str.charAt(0));
  if (str === "") return "";
  else return reverseString2(str.substr(1)) + str.charAt(0);
}
console.log(reverseString2("hello"));
