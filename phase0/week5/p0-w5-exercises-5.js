function reduce(arr, cb, accumulator) {
  let start

  if (accumulator !== undefined) {
    start = 0
  } else {
    start = 1
    accumulator = arr[0]
  }

  for (let i = start; i < arr.length; i++) {
    accumulator = cb(accumulator, arr[i], i, arr)
  }

  return accumulator
}

function kaliTerusRekursif(angka) {
  // you can only write your code here!
  return angka.toString().length === 1 ?
    angka :
    kaliTerusRekursif(reduce(angka.toString().split(''), (a, v) => a *= Number(v)))
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
