function angkaPalindrome(num) {
  // you can only write your code here!
  let found = false;
  while (!found) {
    num++;
    num = num.toString();
    if (num === num.split('').reverse().join('')) {
      found = true;
    }
  }
  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
