function findIndexO(l) {
  for (let i = 0; i < l.length; i++) {
    if (l[i] === 'o') {
      return i
    }
  }
}

function findIndexX(l) {
  let result = [];
  for (let i = 0; i < l.length; i++) {
    if (l[i] === 'x') {
      result.push(i);
    }
  }
  return result;
}

function max(l) {
  let result = 0;
  for (let n of l) {
    if (n > result) {
      result = n
    }
  }
  return result;
}

function min(l, i) {
  let result = max(l);
  for (let n of l) {
    if (Math.abs(n - i) < result) {
      result = Math.abs(n - i)
    }
  }
  return result;
}

function targetTerdekat(arr) {
  // you can only write your code here!
  let indexO = findIndexO(arr);
  let listIndexX = findIndexX(arr);
  if (listIndexX.length === 0) {
    return 0
  }
  return min(listIndexX, indexO);
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
