let tanggal = 25;
let bulan = 9;
let tahun = 2019;

let err = ''; // error message

if (Number(tanggal) > 31 || Number(tanggal) < 1) {
	err += 'Tanggal harus diantara 1 - 31 ';
};

if (Number(bulan) > 12 || Number(bulan) < 1) {
	err += 'Bulan harus diantara 1 - 12 ';
};

if (Number(tahun) > 2200 || Number(tahun) < 1900) {
	err += 'Tahun harus diantara 1900 - 2200';
}
	
if (err) {
	console.log(err);
} else {
	switch (bulan.toString()) {
		case '1':
			console.log(`${tanggal} Januari ${tahun}`);
			break;
		case '2':
			console.log(`${tanggal} February ${tahun}`);
			break;
		case '3':
			console.log(`${tanggal} Maret ${tahun}`);
			break;
		case '4':
			console.log(`${tanggal} April ${tahun}`);
			break;
		case '5':
			console.log(`${tanggal} Mei ${tahun}`);
			break;
		case '6':
			console.log(`${tanggal} Juni ${tahun}`);
			break;
		case '7':
			console.log(`${tanggal} Juli ${tahun}`);
			break;
		case '8':
			console.log(`${tanggal} Agustus ${tahun}`);
			break;
		case '9':
			console.log(`${tanggal} September ${tahun}`);
			break;
		case '10':
			console.log(`${tanggal} Oktober ${tahun}`);
			break;
		case '11':
			console.log(`${tanggal} November ${tahun}`);
			break;
		case '12':
			console.log(`${tanggal} Desember ${tahun}`);
			break;
		default:
			console.log('Something really wrong with bulan variable.');
			break;
	}
}
