function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsy = (num1, num2) => {
  for (let i = 1; i < 1000000; i++) {}
  return num1 * num2;
};

const memoizedClumzy = myMemoize(clumsy);

console.time("first");
console.log(memoizedClumzy(967, 897));
console.timeEnd("first");

console.time("second");
console.log(memoizedClumzy(967, 897));
console.timeEnd("second");
