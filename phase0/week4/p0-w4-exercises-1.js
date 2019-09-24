function angkaPrima(angka) {
  // you can only write your code here!
  if (angka === 1) {
    return false;
  }
  for (let number = 2; number < angka; number++) {
    if (angka % number === 0) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
