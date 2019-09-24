Array.prototype.sum = function () {
  if (this.length === 0) {
    return 0
  }
  if (this.length === 1) {
    return this[0]
  }
  let total = this.slice(0, 1)[0]
  for (let i = 1; i < this.length; i++) {
    total += this[i]
  }
  return total
}

function cariMean(arr) {
  // you can only write your code here!
  return Math.round(arr.sum() / arr.length)
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
