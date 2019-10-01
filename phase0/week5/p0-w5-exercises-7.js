function meleeRangedGrouping (str) {
  //your code here
  if (!str) {
    return []
  }

  return str.split(',')
    .map(v => v.split('-'))
    .reduce((a, v) => {
      if (v[1] === 'Ranged') {
        a[0].push(v[0])
      }
      if (v[1] === 'Melee') {
        a[1].push(v[0])
      }
      return a
    }, [[], []])
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
