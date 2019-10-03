function push(arr, item) {
  arr[arr.length] = item
}

function createList(start, end, step) {
  let result = []

  for (; start <= end; start += step) push(result, start)
  
  return result
}

function angkaPrima(angka) {
  // you can only write your code here!
  // return (angka === 1) ?
  //   false :
  //   [...new Array(angka - 2)]
  //     .map((_, i) => i + 2)
  //     .every(v => angka % v !== 0)

  if (angka === 1) {
    return false
  }

  for (let n of createList(2, angka - 1, 1)) {
    if (angka % n === 0) return false
  }

  return true
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
