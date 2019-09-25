var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function pairData(data) {
  // pair data with template and concatenate it
  let template = [`Nomor ID`, `Nama Lengkap`, `TTL`, `Hobi`]
  let result = ''
  
  while (template.length > 0) {
    let temp = template.shift()
    if (temp === 'TTL') {
      result += `${temp}: ${data.shift()} ${data.shift()}\n`
    } else {
      result += `${temp}: ${data.shift()}\n`
    }
  }

  return result
}

function dataHandling(input) {
  for (let data of input) {
    console.log(pairData(data))
  }
}

dataHandling(input)
