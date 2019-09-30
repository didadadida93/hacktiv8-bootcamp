function xo(str) {
  // you can only write your code here!
  // return [...str].filter(v => v === 'x').length === [...str].filter(v => v === 'o').length
  let sumX = 0
  let sumO = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      sumX += 1
    }
    if (str[i] === 'o') {
      sumO += 1
    }
  }
  return sumX === sumO
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
