function kaliTerusRekursif(angka) {
  // you can only write your code here!

  function kaliAngka(num) {
    if (num.toString().length === 1){
      return num
    } else {
      let listAngka = num.toString().split('')
      return Number(listAngka.shift()) * kaliAngka(Number(listAngka.join('')))
    }
  }

  if (angka.toString().length === 1) {
    return angka
  } else {
    return kaliTerusRekursif(kaliAngka(angka))
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
