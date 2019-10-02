function cariMean(arr) {
  // you can only write your code here!
  // return Math.round(arr.reduce((a, v) => a += v) / arr.length)
  let total = arr.slice(0, 1)[0]
  for (let i = 1; i < arr.length; i++) {
    total += arr[i]
  }

  return Math.round(total / arr.length)
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
