// soal nomor 1, 2, & 3
function asteriksFirst(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`*`);
  }
}

function asteriksSecond(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`*`.repeat(n));
  }
}

function asteriksThird(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`*`.repeat(i));
  }
}

let rows1 = 5;
let rows2 = 8;
let rows3 = 7;

let rows = [rows1, rows2, rows3];

for (let i in rows) {
  switch (i) {
    case `0`:
      asteriksFirst(rows[i]);
      break;
    case `1`:
      asteriksSecond(rows[i]);
      break;
    case `2`:
      asteriksThird(rows[i]);
      break;
    default:
      console.log(`Error happen when i = ${i}`);
      break;
  }
}
