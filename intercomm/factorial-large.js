function facLarge(num) {
  result = [];
  let resultSize = 1;
  result[0] = 1;
  for (let x = 2; x <= num; x++) {
    resultSize = multiply(x, result, resultSize);
    console.log("resultSize", resultSize);
  }
  return result;
}

function multiply(x, result, resultSize) {
  let carry = 0;
  for (let i = 0; i < resultSize; i++) {
    let product = result[i] * x + carry;
    console.log("product", product);
    result[i] = product % 10;
    console.log("result", result);
    carry = Math.floor(product / 10);
  }
  console.log("carry", carry);
  while (carry) {
    result[resultSize] = carry % 10;
    carry = Math.floor(carry / 10);
    resultSize++;
  }
  return resultSize;
}

console.log(facLarge(5));
//5*4*3*2*1
