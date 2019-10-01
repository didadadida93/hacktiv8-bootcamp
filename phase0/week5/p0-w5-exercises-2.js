function changeVocals (str) {
  //code di sini
  let alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ]

  let alphabetVocals = {
    'a': null,
    'i': null,
    'e': null,
    'u': null,
    'o': null,
    'A': null,
    'I': null,
    'E': null,
    'U': null,
    'O': null,
  }

  return str.split('')
    .map(v => v in alphabetVocals ? alphabetList[alphabetList.indexOf(v) + 1] : v)
    .join('')
}

function reverseWord (str) {
  //code disini
  return str.split('').reverse().join('')
}

function setLowerUpperCase (str) {
  //code disini
  return str.split('')
    .map(v => v.toUpperCase() === v ? v.toLowerCase() : v.toUpperCase())
    .join('')
}

function removeSpaces (str) {
  //code di sini
  return str.split(' ').join('')
}

function passwordGenerator (name) {
  //code di sini
  if (name.length <= 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
