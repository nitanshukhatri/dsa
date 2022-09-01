function pow(base, exp) {
  if (exp == 0) {
    return 1;
  }
  return base * pow(base, exp - 1);
}

console.log(pow(2, 4));

// 2^4=2*2*2*2
