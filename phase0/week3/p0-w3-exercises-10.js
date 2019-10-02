function perkalianUnik(arr) {
  // you can only write your code here!
  // return arr.map((_, index, ar) => ar.filter((_, i) => i !== index)
  //   .reduce((a, v) => a *= v))
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      // get number after this index
      let temp = arr[i + 1]
      for (let j = 2; j < arr.length; j++) {
        temp *= arr[j]
      }
      result.push(temp)
    }

    if (i === arr.length - 1 || i !== 0) {
      // get number from very first index
      let temp = arr[0]
      for (let j = 0; j < arr.length; j++) {
        if (j !== i) temp *= arr[j]
      }
      result.push(temp)
    }
  }
  return result
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
