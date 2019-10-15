function changeVocals (str) {
  //code di sini
  let result = ''

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'i' ||
      str[i] === 'u' ||
      str[i] === 'e' ||
      str[i] === 'o' ||
      str[i] === 'A' ||
      str[i] === 'I' ||
      str[i] === 'U' ||
      str[i] === 'E' ||
      str[i] === 'O'
    ) {
      result += String.fromCharCode(str[i].charCodeAt() + 1)
    } else {
      result += str[i]
    }
  }

  return result
}

function reverseWord (str) {
  //code disini
  let result = ''

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }

  return result
}

function setLowerUpperCase (str) {
  //code disini
  let result = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === str[i]) {
      result += str[i].toUpperCase()
    } else {
      result += str[i].toLowerCase()
    }
  }

  return result
}

function removeSpaces (str) {
  //code di sini
  let result = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') result += str[i]
  }

  return result
}

function passwordGenerator (name) {
  //code di sini
  if (name.length <= 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  name = changeVocals(name)
  name = reverseWord(name)
  name = setLowerUpperCase(name)
  name = removeSpaces(name)

  return name
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
