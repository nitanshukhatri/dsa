// 4*3*2*1

function fact(arg) {
  if (arg == 1) {
    return arg;
  }
  return arg * fact(arg - 1);
}

console.log(fact(5));
