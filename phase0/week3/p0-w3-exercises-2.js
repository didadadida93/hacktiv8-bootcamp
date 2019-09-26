function balikKata(kata) {
  // you can only write your code here!
  return [...kata].map((_, i, ar) => ar[ar.length - 1 - i]).join('')
}

console.log(balikKata('Ini akan terbalik'))
