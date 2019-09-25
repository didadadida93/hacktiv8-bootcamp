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

function pop(list, index) {
  // pop value from array based on index and return new array
  if (index === 0) {
    return list.slice(1, list.length)
  }
  if (index === list.length - 1) {
    return list.slice(0, list.length - 1)
  }
  if (index >= list.length) {
    console.log(`out of index, array length is ${list.length - 1}`)
  }
  return [...list.slice(0, index), ...list.slice(index + 1, list.length)]
}

function perkalianUnik(arr) {
  // you can only write your code here!
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let slicedList = pop(arr, i)
    result.push(slicedList.multiply())
  }
  return result;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
