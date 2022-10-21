function add(a) {
  return function (b) {
    if (!b) {
      return a;
    }
    return sum(a + b);
  };
}

console.log(add(5)(2)(4)(5)());
