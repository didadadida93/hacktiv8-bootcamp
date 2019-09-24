String.prototype.findIndexOf = function (value) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    if (value === this[i]) {
      result.push(i)
    }
  }
  return result.length > 0 ? result : -1
}

function checkAB(num) {
  // you can only write your code here!
  let indexA = num.findIndexOf('a') !== -1 ? num.findIndexOf('a') : []
  let indexB = num.findIndexOf('b') !== -1 ? num.findIndexOf('b') : []

  for (let ia of indexA) {
    for (let ib of indexB) {
      if (Math.abs(ia - ib) === 4) {
        return true
      }
    }
  }
  return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
