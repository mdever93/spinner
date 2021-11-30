// process.stdout.write('hello from spinner1.js... \rheyyy\n');

// setTimeout(() => {
//   process.stdout.write('\r|     ')
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/     ')
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-     ')
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\     ')
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|     ')
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/     ')
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-     ')
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\     ')
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|     \n')
// }, 1700);

const draw = "|/-\\|/-\\|";
let delay = 100;
for (let i = 0; i < draw.length; i++) {
  const j = draw[i];
  setTimeout(() => {
    process.stdout.write(`\r${j}     `);
    if (i === draw.length - 1) {
      process.stdout.write("\n");
    }
  }, delay);
  delay += 200;
}