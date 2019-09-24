function cariMedianDeretGenap(list) {
  // find median from array of number that have even length
  let startIndex = list.length / 2;
  return (list[startIndex - 1] + list[startIndex]) / 2
}

function cariMedianDeretGanjil(list) {
  // find median from array of number that have odd length
  let startIndex = Math.floor(list.length / 2);
  return list[startIndex]
}

function cariMedian(arr) {
  // you can only write your code here!
  if (arr.length % 2 === 0) {
    return cariMedianDeretGenap(arr);
  }
  if (arr.length % 2 === 1) {
    return cariMedianDeretGanjil(arr);
  }
  return `Something wrong when arr = ${arr}`;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
