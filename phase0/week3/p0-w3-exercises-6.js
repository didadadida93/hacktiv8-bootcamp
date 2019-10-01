function angkaPalindrome(num) {
  // you can only write your code here!
  num++
  return num.toString() === num.toString().split('').map((_, i, ar) => ar[ar.length - 1 - i]).join('') ?
    num :
    angkaPalindrome(num)
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
