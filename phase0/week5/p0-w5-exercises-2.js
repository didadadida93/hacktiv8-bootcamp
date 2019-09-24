function changeVocals (str) {
  //code di sini
  let alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ]

  let result = ''

  for (let word of str) {
    switch (word) {
      case 'a':
        result += alphabetList[alphabetList.indexOf(word) + 1]
        break
      case 'i':
        result += alphabetList[alphabetList.indexOf(word) + 1]
        break
      case 'u':
        result += alphabetList[alphabetList.indexOf(word) + 1]
        break
      case 'e':
        result += alphabetList[alphabetList.indexOf(word) + 1]
        break
      case 'o':
        result += alphabetList[alphabetList.indexOf(word) + 1]
        break
      case 'A':
        result += alphabetList[alphabetList.indexOf(word) + 1]
        break
      case 'I':
        result += alphabetList[alphabetList.indexOf(word) + 1]
        break
      case 'U':
        result += alphabetList[alphabetList.indexOf(word) + 1]
        break
      case 'O':
        result += alphabetList[alphabetList.indexOf(word) + 1]
        break
      case 'E':
        result += alphabetList[alphabetList.indexOf(word) + 1]
        break
      default:
        result += word
        break
    }
  }

  return result
}

function reverseWord (str) {
  //code disini
  return str.split('').reverse().join('')
}

function setLowerUpperCase (str) {
  //code disini
  let result = '';
  for (let w of str) {
    if (w.toUpperCase() === w) {
      result += w.toLowerCase();
    } else {
      result += w.toUpperCase();
    }
  }
  return result;
}

function removeSpaces (str) {
  //code di sini
  return str.split(' ').join('')
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
