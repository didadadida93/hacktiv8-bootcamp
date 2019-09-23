function decouple(num) {
  let result = [];
  for (let i = 0; i < num.length - 1; i++) {
    result.push(Number([num[i], num[i + 1]].join('')))
  }
  return result
}

function max(l) {
  let maximum = 0;
  for (let n of l) {
    if (n > maximum) {
      maximum = n;
    }
  }
  return maximum;
}

function pasanganTerbesar(num) {
  // you can only write your code here!
  num = num.toString()
  let couple = decouple(num)
  return max(couple);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
