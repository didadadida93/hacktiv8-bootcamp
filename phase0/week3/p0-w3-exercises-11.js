function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  if (arr.length <= 2) {
    return true;
  }
  return arr.map((v, i, ar) => i === ar.length - 1 ? v - ar[i - 1] : Math.abs(v - ar[i + 1]))
    .every((v, _, ar) => v === ar[0])
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
