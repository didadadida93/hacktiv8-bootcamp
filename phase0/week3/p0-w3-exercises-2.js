function balikKata(kata) {
  // you can only write your code here!
  let result = ``;
  for (let i = kata.length - 1; i >= 0; i--) {
    result += kata[i];
  }
  return result
}

let input = window.prompt("Input kata yang ingin dibalik: ");

console.log(balikKata(input));
