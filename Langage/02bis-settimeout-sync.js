// setTimeout(() => {
//   console.log('1s');
// }, 1000);

// console.log('FIN');

// // FIN
// // ......
// // 1s

// function setTimeoutSync(callback, delayMs) {
//   // bloquer le thread pendant delayMs
//   const debut = Date.now();
//   while (Date.now() < debut + delayMs); // THREAD BLOCKING
//   callback();
// }

// setTimeoutSync(() => {
//   console.log('1s');
// }, 1000);
// console.log('FIN');

// ......
// 1s
// FIN

function pause(delayMs) {
  // bloquer le thread pendant delayMs
  const debut = Date.now();
  while (Date.now() < debut + delayMs); // THREAD BLOCKING
}

pause(1000);
console.log('1s');
console.log('FIN');