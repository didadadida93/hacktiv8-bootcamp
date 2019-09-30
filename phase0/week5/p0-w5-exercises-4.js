function totalDigitRekursif(angka) {
  // you can only write your code here!
  return angka.toString().length === 1 ? angka : Number(angka.toString().split('').shift()) + totalDigitRekursif(Number(angka.toString().slice(1)))
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
