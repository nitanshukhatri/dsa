var clumsy = function (n) {
  // let operations = ['*', '/', '+', '-'];
  // let counter=0;
  // (10*9/8)+(7) - (6*5/4)+(3) -(2*1)
  let result = 0;
  let sign = 1;
  for (let i = n; i > 0; i -= 4) {
    let temp = i;

    if (i - 1 > 0) temp *= i - 1;
    if (i - 2 > 0) temp /= i - 2;
    console.log("temp", temp);
    temp = Math.floor(temp);
    result += sign * temp;
    if (i - 3 > 0) result += i - 3;

    console.log(result);
    sign = -1;
  }
  return result;
};
console.log(clumsy(5));
