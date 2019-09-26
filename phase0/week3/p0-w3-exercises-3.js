var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input) {
  let template = [`Nomor ID`, `Nama Lengkap`, `TTL`, `Hobi`]
  
  for (let data of input) {
    data.splice(2, 2, `${data[2]} ${data[3]}`)
    console.log(data.map((v, i) => `${template[i]}: ${v}`).join('\n'), '\n')
  }
}

dataHandling(input)
