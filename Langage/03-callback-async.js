setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');
console.log('F');

// pile d'appel
// ^
// |
// |                             lg                  lg    lg                lg
// |st - st - st - st - lg  ⟳   cbB ⟳               cbA - cbD ⟳            cbC
// 0-----------------------------4-------------------500---------------------1000-> temps
//                      E        B                   A     D                 C

// file d'attente (0ms) : cbB
// file d'attente (4ms) : 
// file d'attente (500ms) : cbA - cbD
// file d'attente (501ms) : cbD
// file d'attente (502ms) : 
// file d'attente (1000ms) : cbC
// file d'attente (1001ms) : 

// Jake Archibald : JSConf Asia 2018 - In the loop
// A regarder


// Pour boucler en Asynchrone
function loop() {
  setTimeout(() => {
    console.log('1s');
    loop();
  }, 1000);
}

loop();


// pile d'appel
// ^
// |                           st                            st
// |st                    lg - loop                     lg - loop
// |loop                  =>                            =>
// +----------------------1000--------------------------1000-------------------------> temps
//                        1s                            1s

// CONCLUSION : PAS RECURSIF

// NE PAS ECRIRE
// while(true) {
//   setTimeout(() => {
    
//   }, 1000);
// }