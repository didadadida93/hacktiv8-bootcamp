function month(bulan) {
  switch (bulan) {
    case '1':
      return 'January';
      break;
    case '2':
      return 'February';
      break;
    case '3':
      return 'Maret';
      break;
    case '4':
      return 'April';
      break;
    case '5':
      return 'Mei';
      break;
    case '6':
      return 'Juni';
      break;
    case '7':
      return 'Juli';
      break;
    case '8':
      return 'Agustus';
      break;
    case '9':
      return 'September';
      break;
    case '10':
      return 'Oktober';
      break;
    case '11':
      return 'November';
      break;
    case '12':
      return 'Desember';
      break;
  }
}


function dataHandling2 (arr) {
  arr.splice(1, arr.length, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  console.log(arr);
  let bulan = arr[3].split('/')[1];
  console.log(month(Number(bulan).toString()));
  console.log(arr[3].split('/').sort((a, b) => Number(a) < Number(b)));
  console.log(arr[3].split('/').join('-'));
  console.log(arr[1].slice(0, 15));
}

var foo = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(foo);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
