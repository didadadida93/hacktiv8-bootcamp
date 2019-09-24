Array.prototype.findIndexOf = function (value) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    if (value === this[i]) {
      result.push(i)
    }
  }
  return result.length > 0 ? result : -1
}

function max(list) {
  // find maximum number from array
  let maximum = list.slice(0, 1)[0]
  for (let i = 1; i < list.length; i++) {
    maximum = list[i] > maximum ? list[i] : maximum
  }
  return maximum
}

function minDistance(list, num) {
  // substract number from list with num and find the lowest
  let result = max(list)
  for (let n of list) {
    result = Math.abs(num - n) < result ? Math.abs(num - n) : result
  }
  return result
}

function targetTerdekat(arr) {
  // you can only write your code here!
  return arr.findIndexOf('x') === -1 ? 0 : minDistance(arr.findIndexOf('x'), ...arr.findIndexOf('o'))
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
