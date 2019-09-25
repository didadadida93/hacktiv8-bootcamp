Array.prototype.multiply = function () {
  if (this.length === 0) {
    return 0
  } else if (this.length === 1) {
    return this[0]
  } else {

    let total = this.slice(0, 1)[0]
    for (let i = 1; i < this.length; i++) {
      total *= this[i]
    }

    return total
  }
}

function perkalianUnik(arr) {
  // you can only write your code here!
  return arr.map((value, index) => arr.filter((v, i) => i !== index).multiply())
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
