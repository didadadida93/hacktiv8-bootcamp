function targetTerdekat(arr) {
  // you can only write your code here!
  if (arr.indexOf('x') === -1) {
    return 0
  }
  // return arr.map((v, i) => v === 'x' ? i : -1)
  //   .filter(v => v !== -1)
  //   .map(v => Math.abs(arr.indexOf('o') - v))
  //   .reduce((a, v) => a < v ? a : v)
  let indexO = arr.indexOf('o')

  let distanceFromXtoO = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') distanceFromXtoO.push(Math.abs(i - indexO))
  }

  let shortest = distanceFromXtoO.slice(0, 1)[0]

  for (let i = 0; i < distanceFromXtoO.length; i++) {
    if (distanceFromXtoO[i] < shortest) shortest = distanceFromXtoO[i]
  }
  return shortest
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
