let tanggal = 28;
let bulan = 2;
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
			if (1 < tanggal && tanggal <= 31) {
				console.log(`${tanggal} Januari ${tahun}`);
				break;
			}
			console.log(`bulan Januari hanya memiliki tanggal 1-31`);
			break;
		case '2':
			// console.log(`${tanggal} February ${tahun}`);
			// break;
			if (tahun % 4 === 0) {
				// tahun kabisat
				if (1 < tanggal && tanggal <=29) {
					console.log(`${tanggal} February ${tahun}`);
					break;
				}
				console.log(`bulan February tahun ini hanya memiliki tanggal 1-29`);
				break;
			} else {
				// bukan tahun kabisat
				if (1 < tanggal && tanggal <= 28) {
					console.log(`${tanggal} February ${tahun}`);
					break;
				}
				console.log(`bulan February tahun ini hanya memiliki tanggal 1-28`);
				break;
			}
		case '3':
			if (1 < tanggal && tanggal <= 31) {
				console.log(`${tanggal} Maret ${tahun}`);
				break;
			}
			console.log(`bulan Maret hanya memiliki tanggal 1-31`);
			break;
		case '4':
			if (1 < tanggal && tanggal <= 30) {
				console.log(`${tanggal} April ${tahun}`);
				break;
			}
			console.log(`bulan April hanya memiliki tanggal 1-30`);
			break;
		case '5':
			if (1 < tanggal && tanggal <= 31) {
				console.log(`${tanggal} Mei ${tahun}`);
				break;
			}
			console.log(`bulan Mei hanya memiliki tanggal 1-31`);
			break;
		case '6':
			if (1 < tanggal && tanggal <= 30) {
				console.log(`${tanggal} Juni ${tahun}`);
				break;
			}
			console.log(`bulan Juni hanya memiliki tanggal 1-30`);
			break;
		case '7':
			if (1 < tanggal && tanggal <= 31) {
				console.log(`${tanggal} Juli ${tahun}`);
				break;
			}
			console.log(`bulan Juli hanya memiliki tanggal 1-31`);
			break;
		case '8':
			if (1 < tanggal && tanggal <= 31) {
				console.log(`${tanggal} Agustus ${tahun}`);
				break;
			}
			console.log(`bulan Agustus hanya memiliki tanggal 1-31`);
			break;
		case '9':
			if (1 < tanggal && tanggal <= 30) {
				console.log(`${tanggal} September ${tahun}`);
				break;
			}
			console.log(`bulan September hanya memiliki tanggal 1-30`);
			break;
		case '10':
			if (1 < tanggal && tanggal <= 31) {
				console.log(`${tanggal} Oktober ${tahun}`);
				break;
			}
			console.log(`bulan Oktober hanya memiliki tanggal 1-31`);
			break;
		case '11':
			if (1 < tanggal && tanggal <= 30) {
				console.log(`${tanggal} November ${tahun}`);
				break;
			}
			console.log(`bulan November hanya memiliki tanggal 1-30`);
			break;
		case '12':
			if (1 < tanggal && tanggal <= 31) {
				console.log(`${tanggal} Desember ${tahun}`);
				break;
			}
			console.log(`bulan Desember hanya memiliki tanggal 1-31`);
			break;
		default:
			console.log('Something really wrong with bulan variable.');
			break;
	}
}
