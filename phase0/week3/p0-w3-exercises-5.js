function palindrome(kata) {
  // you can only write your code here!
  return kata === [...kata].map((_, i, ar) => ar[ar.length - 1 - i]).join('')
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
