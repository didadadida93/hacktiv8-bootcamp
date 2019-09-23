function mengelompokkanAngka(arr) {
  // you can only write your code here!
  let evenList = [];
  let oddList = [];
  let anotherList = [];
  while (arr.length > 0) {
    let temp = arr.shift();
    if (temp % 3 === 0) { // multiply 3
      anotherList.push(temp)
    } else if (temp % 2 === 1) { // odd
      oddList.push(temp)
    } else if (temp % 2 === 0) { // even
      evenList.push(temp)
    } else {
      console.log(`failed to identify ${temp}`)
    }
  }
  return [evenList, oddList, anotherList];
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
