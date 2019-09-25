function decouple(strNumber) {
  // coupling number from array with their next neighbor and put it on
  // array then return it
  let result = []
  for (let i = 0; i < strNumber.length - 1; i++) {
    result.push(Number([strNumber[i], strNumber[i + 1]].join('')))
  }
  return result
}

function max(list) {
  // find maximum number from array
  let maximum = list.slice(0, 1)[0]
  for (let i = 1; i < list.length; i++) {
    maximum = list[i] > maximum ? list[i] : maximum
  }
  return maximum
}

function pasanganTerbesar(num) {
  // you can only write your code here!
  return max(decouple(num.toString()))
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
