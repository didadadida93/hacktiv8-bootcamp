function push(arr, item) {
  arr[arr.length] = item
}

function createList(start, end, step) {
  let result = []

  for (; start <= end; start += step) push(result, start)

  return result
}

function faktorPengali(num) {
  let result = []

  for (let n of createList(0, num, 1)) {
    if (num % n === 0) push(result, n)
  }

  return result
}

function indexOf(arr, item) {
  let temp = -1

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      temp = i
      break
    }
  }
  
  return temp
}

function fpb(angka1, angka2) {
  // you can only write your code here!
  // let faktorPengaliAngka1 = [...new Array(angka1)]
  //   .map((_, i) => i)
  //   .filter(v => angka1 % v === 0)
  //
  // let faktorPengaliAngka2 = [...new Array(angka2)]
  //   .map((_, i) => i)
  //   .filter(v => angka2 % v === 0)
  //
  // return faktorPengaliAngka1.filter(v => faktorPengaliAngka2.indexOf(v) !== -1)
  //   .reduce((a, v, i, ar) => {
  //     if (ar.length - 1 === i) a = v
  //     return a
  //   })

  let fpb1 = faktorPengali(angka1)
  let fpb2 = faktorPengali(angka2)

  for (let i = fpb1.length - 1; i >= 0; i--) {
    if (indexOf(fpb2, fpb1[i]) !== -1) return fpb1[i]
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
