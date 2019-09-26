function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  return [...new Array(angka + 1)].map((v, i) => i).filter(v => v !== 0 && angka % v === 0).map(v => [v, angka / v].join('').length).reduce((a, v) => a < v ? a : v)
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
