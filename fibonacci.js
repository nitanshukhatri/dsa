function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

function fib(n) {
  var a = 0,
    b = 1;
  for (var i = 0; i < n; i++) {
    var temp = a + b;
    a = b;
    b = temp;
  }
  return a;
}
0;
console.log(fibonacci(3));
