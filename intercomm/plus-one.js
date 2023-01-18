//https://www.youtube.com/watch?v=P3K_hKNU2ME&t=9s&ab_channel=KAEducation
var plusOne = function (digits) {
  for (let i = digits.length; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};
