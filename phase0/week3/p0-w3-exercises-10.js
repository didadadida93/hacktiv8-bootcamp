function multiply(l) {
  result = l.shift();
  for (let n of l) {
    result *= n
  }
  return result
}

function pop(l, i) {
  if (i === 0) {
    return l.slice(1, l.length)
  }
  let leftSide = l.slice(0, i);
  let rightSide = l.slice(i + 1, l.length);
  return [...leftSide, ...rightSide];
}

function perkalianUnik(arr) {
  // you can only write your code here!
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let slicedList = pop(arr, i);
    result.push(multiply(slicedList))
  }
  return result;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

