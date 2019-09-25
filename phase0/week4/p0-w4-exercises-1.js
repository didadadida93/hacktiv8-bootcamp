function createList(start, end, step) {
  let result = []
  for (start; start < end; start += step) {
    result.push(start)
  }
  return result
}

function angkaPrima(angka) {
  // you can only write your code here!
  return angka === 1 ? false : createList(2, angka, 1).every(v => angka % v !== 0)
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
