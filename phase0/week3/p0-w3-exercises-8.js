function pasanganTerbesar(num) {
  // you can only write your code here!
  return [...num.toString()]
    .map((_, index, ar) => Number(ar.filter((_, i) => i === index || i === index + 1).join('')))
    .reduce((a, v) => a > v ? a : v)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
