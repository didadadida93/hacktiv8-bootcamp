function makeObject(data) {
  let date = new Date()
  let obj = {
    'firstName': null,
    'lastName': null,
    'gender': null,
    'age': null,
  }

  let c = 0
  for (let key in obj) {
    obj[key] = data[c]
    c++
  }
  obj.age = obj.age ? date.getFullYear() - obj.age : 'Invalid Birth Year'

  return obj
}

function changeMe(arr) {
  // you can only write your code here!
  let c = 1
  for (let data of arr) {
    let obj = makeObject(data)
    console.log(`${c}. ${obj.firstName} ${obj.lastName}:`)
    console.log(obj)
    c++
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
