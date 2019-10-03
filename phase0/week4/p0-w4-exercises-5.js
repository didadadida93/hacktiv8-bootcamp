function indexOf(arr, item) {
  let temp = -1

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      temp = i
      break
    }
  }

  return temp
}

function ubahHuruf(kata) {
  // you can only write your code here!
  let alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ]

  // return kata.split('')
  //   .map(v => alphabetList[alphabetList.indexOf(v) + 1])
  //   .join('')

  let result = ''
  
  for (let i = 0; i < kata.length; i++) {
    result += alphabetList[indexOf(alphabetList, kata[i]) + 1]
  }

  return result
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
