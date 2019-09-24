Array.prototype.have = function (compare) {
  for (let data of this) {
    if (compare === data) {
      return true;
    }
  }
  return false;
}

//
// function digitPerkalianMinimum(angka) {
//   // you can only write your code here!
// }
//
// // TEST CASES
// console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2
