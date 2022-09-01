function all(arr, callback) {
  console.log(arr);
  const copy = [...arr];
  if (copy.length === 0) return true;

  console.log(callback(copy[0]));
  if (callback(copy[0])) {
    copy.shift();
    return all(copy, callback);
  } else {
    return false;
  }
}

const output = all([1, 2, 3], function (num) {
  return num < 7;
});
console.log(output);
