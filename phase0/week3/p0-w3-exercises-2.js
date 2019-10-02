function balikKata(kata) {
  // you can only write your code here!
  // return [...kata].map((_, i, ar) => ar[ar.length - 1 - i]).join('')
  let temp = ''
  for (let i = kata.length - 1; i >= 0; i--) {
    temp += kata[i]
  }
  return temp
}

console.log(balikKata('Ini akan terbalik'))
