function angkaPrima(angka) {
  // you can only write your code here!
  return (angka === 1) ?
    false :
    [...new Array(angka - 2)]
      .map((_, i) => i + 2)
      .every(v => angka % v !== 0)
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
