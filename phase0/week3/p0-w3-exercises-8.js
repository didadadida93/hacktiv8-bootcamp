function pasanganTerbesar(num) {
  // you can only write your code here!
  // return [...num.toString()]
  //   .map((_, index, ar) => Number(ar.filter((_, i) => i === index || i === index + 1).join('')))
  //   .reduce((a, v) => a > v ? a : v)
  let coupled = []
  for (let i = 0; i < num.toString().length; i++) {
    if (i === num.toString().length - 1) {
      coupled.push(Number(num.toString()[i]))
    } else {
      coupled.push(Number([num.toString()[i], num.toString()[i + 1]].join('')))
    }
  }

  let result = coupled.slice(0, 1)[0]
  for (let i = 0; i < coupled.length; i++) {
    if (coupled[i] > result) result = coupled[i]
  }

  return result
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
