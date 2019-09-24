function groupAnimals(animals) {
  // you can only write your code here!
  let temp = new Map()
  for (let animal of animals) {
    if (!(animal[0] in temp)) {
      temp[animal[0]] = []
    }
    temp[animal[0]].push(animal)
  }

  let result = []
  for (let key in temp) {
    result.push(temp[key])
  }
  return result.sort()
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
