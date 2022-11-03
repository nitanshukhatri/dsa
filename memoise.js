function getUniqueId(fn, args) {
  let uniqueId = [];
  uniqueId = uniqueId.concat(fn.name, args);
  return uniqueId.join("|");
}
function myMemoize(fn, context) {
  const cache = {};
  return function (...args) {
    const uniqueId = getUniqueId(fn, args);
    var argsCache = JSON.stringify(args);
    if (!cache[uniqueId]) {
      cache[uniqueId] = fn.call(context || this, ...args);
    }
    console.log(cache);
    return cache[uniqueId];
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
