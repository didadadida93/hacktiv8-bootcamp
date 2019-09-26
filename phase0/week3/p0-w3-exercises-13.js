function targetTerdekat(arr) {
  // you can only write your code here!
  if (arr.indexOf('x') === -1) {
    return 0
  }
  return arr.map((v, i) => v === 'x' ? i : -1).filter(v => v !== -1).map(v => Math.abs(arr.indexOf('o') - v)).reduce((a, v) => a < v ? a : v)
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
