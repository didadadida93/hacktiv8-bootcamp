// soal nomor 1, 2, & 3
function asteriksFirst(n) {
  for (i = 1; i <= n; i++) {
    console.log(`*`);
  }
}

function asteriksSecond(n) {
  for (i = 1; i <= n; i++) {
    console.log(`*`.repeat(n));
  }
}

function asteriksThird(n) {
  for (i = 1; i <= n; i++) {
    console.log(`*`.repeat(i));
  }
}

let rows = []
rows.push(Number(window.prompt(`Row 1?`)));
rows.push(Number(window.prompt(`Row 2?`)));
rows.push(Number(window.prompt(`Row 3?`)));

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
