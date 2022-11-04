let res = [];
function flatten(value) {
  const copy = value.slice();
  for (let i = 0; i < copy.length; i++) {
    if (Array.isArray(value[i])) {
      flatten(value[i]);
    } else {
      res.push(value[i]);
    }
  }
  return res;
}
console.log(flatten([1, [2, [3, [4, [5]]]]]));
