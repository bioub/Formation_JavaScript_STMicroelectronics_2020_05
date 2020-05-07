// // Portée introduite au niveau d'un fichier : Module JavaScript

// // Technique : Module IIFE
// // Immediately Invoked Function Expression
// (function () {
//   'use strict';

//   const prenom = 'Romain';

//   function hello() {
//     return `Hello ${prenom}`;
//   }

//   window.hello = hello;
// }());

const prenom = 'Romain';

// export function hello() {
//   return `Hello ${prenom}`;
// }

// export function bye() {
//   return `Bye ${prenom}`;
// }

export function hello() {
  return `Hello ${prenom}`;
}

export function bye() {
  return `Bye ${prenom}`;
}
