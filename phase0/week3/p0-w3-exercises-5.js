String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}

function palindrome(kata) {
  // you can only write your code here!
  return kata === kata.reverse()
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
