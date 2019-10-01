function fpb(angka1, angka2) {
  // you can only write your code here!
  let faktorPengaliAngka1 = [...new Array(angka1)]
    .map((_, i) => i)
    .filter(v => angka1 % v === 0)

  let faktorPengaliAngka2 = [...new Array(angka2)]
    .map((_, i) => i)
    .filter(v => angka2 % v === 0)

  return faktorPengaliAngka1.filter(v => faktorPengaliAngka2.indexOf(v) !== -1)
    .reduce((a, v, i, ar) => {
      if (ar.length - 1 === i) a = v
      return a
    })
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
