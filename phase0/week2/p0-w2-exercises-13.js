function xo(str) {
  // you can only write your code here!
  let xSum = 0;
  let oSum = 0;

  for (let s of str) {
    if (s === 'x') {
      xSum += 1;
    };
    if (s === 'o') {
      oSum += 1;
    }
  }

  return xSum === oSum
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
