function sort(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (cb(arr[i], arr[j])) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
}

function join(arr, separator) {
  let result = ''

  for (let i = 0; i < arr.length; i++) {
    result += arr[i] + separator
  }

  if (separator === '') return result.substring(0)

  return result.substring(0, result.length - 1)
}

function urutkanAbjad(str) {
  // you can only write your code here!
  // return str.split('').sort().join('')

  let strList = str.split('')

  sort(strList, (a, b) => a > b)
  return join(strList, '')
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
