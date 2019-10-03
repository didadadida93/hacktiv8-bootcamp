function push(arr, item) {
  arr[arr.length] = item
}

function createList(start, end, step) {
  let result = []

  for (; start <= end; start += step) push(result, start)

  return result
}

function sort(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (cb(arr[i], arr[j])) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
}

function join(arr, separator) {
  let result = ''

  for (let i = 0; i < arr.length; i++) {
    result += arr[i] + separator
  }

  if (separator === '') return result.substring(0, result.length)

  return result.substring(0, result.length - 1)
}

function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  // return [...new Array(angka + 1)]
  //   .map((_, i) => i)
  //   .filter(v => angka % v === 0)
  //   .map(v => [v, angka / v].join('').length)
  //   .reduce((a, v) => a < v ? a : v)

  let result = []
  for (let num of createList(0, angka, 1)) {
    if (angka % num === 0) {
      let temp = [num, angka / num]
      push(result, join(temp, '').length)
    }
  }

  sort(result, (a, b) => a > b)
  return result[0]
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
