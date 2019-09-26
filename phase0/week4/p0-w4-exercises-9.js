function checkAB(num) {
  // you can only write your code here!
  let indexA = num.split('').map((v, i) => v === 'a' ? i : -1).filter(v => v !== -1)
  let indexB = num.split('').map((v, i) => v === 'b' ? i : -1).filter(v => v !== -1)
  
  return indexA.some(v => indexB.some(valueB => Math.abs(v - valueB) === 4))
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
