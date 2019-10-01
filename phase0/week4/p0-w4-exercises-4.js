function cariModus(arr) {
  // you can only write your code here!
  let temp = arr.reduce((a, v) => {
    if (!a[v]) a[v] = 0
    a[v] += 1
    return a
  }, {})

  return Object.values(temp).every((v, _, ar) => v === ar[0]) ?
    -1 :
    [...Object.entries(temp)].sort((a, b) => a[1] < b[1])[0][0]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
