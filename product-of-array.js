function product(arr) {
  console.log(arr);
  if (arr.length === 0) {
    return 1;
  }
  const b = arr.shift();
  return b * product(arr);
}

console.log(product([1, 2, 10]));
