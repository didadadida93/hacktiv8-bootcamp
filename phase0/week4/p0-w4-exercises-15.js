function push(arr, item) {
  arr[arr.length] = item
}

function objectEntries(obj) {
  let result = []

  for (let key in obj) push(result, [key, obj[key]])
  
  return result
}

function sort(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (cb(arr[i], arr[j])) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
}

function highestScore (students) {
  // Code disini
  // let classScore = students.reduce((a, student) => {
  //   if (!a[student.class]) a[student.class] = []
  //   a[student.class].push({name: student.name, score: student.score})
  //   return a
  // }, {})

  let classScore = {}

  for (let student of students) {
    if (!classScore[student.class]) classScore[student.class] = []
    push(classScore[student.class], {
      name: student.name,
      score: student.score,
    })
  }

  // return Object.entries(classScore)
  //   .map(v => [v[0], v[1].sort((a, b) => a.score < b.score)])
  //   .reduce((a, v) => {
  //     if (!a[v[0]]) a[v[0]] = {}
  //     a[v[0]] = v[1][0]
  //     return a
  //   }, {})

  let result = {}
  let tempEntries = objectEntries(classScore)

  for (let entries of tempEntries) {
    sort(entries, (a, b) => a.score < b.score)
    result[entries[0]] = entries[1][0]
  }

  return result
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
