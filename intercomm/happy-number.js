var isHappy = function (n) {
  let visit = {};
  while (n && !visit[n]) {
    visit[n] = true;
    console.log(visit);
    n = sumofSquares(n);
    if (n == 1) {
      return true;
    }
  }
  return false;
};
let sumofSquares = function (n) {
  let output = 0;
  while (n > 0) {
    let digit = Math.floor(n % 10);

    digit = digit * digit;
    output += digit;
    n = n / 10;
  }
  return output;
};

console.log(isHappy(2));
