function meleeRangedGrouping (str) {
  //your code here
  let result = []
  if (!str) {
    return result
  }

  result[0] = []
  result[1] = []

  for (let splited of str.split(',')) {
    let temp = splited.split('-')
    if (temp[1] === 'Ranged') {
      result[0].push(temp[0])
    } else {
      result[1].push(temp[0])
    }
  }
  
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
