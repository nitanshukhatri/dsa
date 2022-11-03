Array.prototype.myConcat = function () {
  const argumentsBunch = arguments;
  let inputArray = this;
  for (let i = 0; i < argumentsBunch.length; i++) {
    if (Array.isArray(argumentsBunch[i])) {
      inputArray.push(...argumentsBunch[i]);
    } else {
      inputArray.push(argumentsBunch[i]);
    }
  }
  return inputArray;
};
console.log([1, 2, 3].myConcat([4, 5, 6], {}, undefined, null));
