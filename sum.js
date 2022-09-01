function sum(arg) {
  if (arg == 1) {
    return arg;
  }
  return arg + sum(arg - 1);
}
console.log(sum(2));
