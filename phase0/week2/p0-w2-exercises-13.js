function xo(str) {
  // you can only write your code here!
  return [...str].filter(v => v === 'x').length === [...str].filter(v => v === 'o').length
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
