function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  if (arr.length <= 2) {
    return true
  }
  return arr.map((v, i, ar) => i === 0 ? ar[i + 1] / v : v / ar[i - 1])
    .every((v, _, ar) => v === ar[0])
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
