String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}

function angkaPalindrome(num) {
  // you can only write your code here!
  let found = false
  while (!found) {
    num++
    if (num.toString() === num.toString().reverse()) {
      found = true
    }
  }
  return num
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
