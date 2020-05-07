// (function () {
//   'use strict';
//   console.log(hello());
//   console.log(typeof prenom); // undefined

//   console.log(document.querySelector('button'));
// })();

// avec les modules plus besoin de 'use strict'
// on est en mode strict 

// Demo Tree Shaking : https://rollupjs.org/repl/

import { hello } from './hello.js';

console.log(hello());
console.log(typeof prenom); // undefined

// Dynamic Module ES2020
// document.addEventListener('click', () => {
//   import('./hello.js').then(({ hello }) => {
//     console.log(hello());
//   })
// });