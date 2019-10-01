function kaliTerusRekursif(angka) {
  // you can only write your code here!
  return angka.toString().length === 1 ?
    angka :
    kaliTerusRekursif(angka.toString().split('').reduce((a, v) => a *= v))
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
