function objectValues(obj) {
  let result = []
  for (let key in obj) {
    result.push(obj[key])
  }
  return result
}

function groupAnimals(animals) {
  // you can only write your code here!
  // return Object.values(animals.reduce((a, v) => {
  //   if (!a[v[0]]) a[v[0]] = []
  //   a[v[0]].push(v)
  //   return a
  // }, {})).sort()
  let tempObj = {}
  for (let animal of animals) {
    if (!tempObj[animal[0]]) tempObj[animal[0]] = []
    tempObj[animal[0]].push(animal)
  }

  return objectValues(tempObj).sort()
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
