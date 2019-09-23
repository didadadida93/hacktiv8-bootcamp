function flattenObject(temp) {
  let result = [];
  for (let word in temp) {
    result.push(temp[word])
  }
  return result.sort()
}

function groupAnimals(animals) {
  // you can only write your code here!
  let temp = {};
  for (let animal of animals) {
    if (!(animal[0] in temp)) {
      temp[animal[0]] = []
    }
    temp[animal[0]].push(animal)
  }
  return flattenObject(temp)
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
