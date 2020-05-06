'use strict';

// ES6

// Slides 128 et 130

// var
// function sum(a, b) {
//   let result = a + b;

//   for (let i = 2; i < arguments.length; i++) {
//     result += arguments[i];
//   }

//   return result;
// }

// const resultat = sum(1, 2, 3, 4);

const coords = {};
coords.x = 1; // n'empeche d'étendre l'objet

const prenoms = [];
prenoms.push('Romain'); // n'empeche d'écrire dans le tableau
// prenoms = []; // ERROR

// En résumé, bonne pratique sur les variables :
// - const quand c'est possible
// - let sinon

// Slide 131
const url = 'https://formation.tech/';
const lien = '<a href="' + url + '">C\'est mon site</a>';

// En ES6 avec template literal
const lienES6 = `<a href="${url}">C'est mon site</a>`;

// // function declaration
// function sum(a, b) { return a + b; }

// // anonymous function expression
// const sum = function(a, b) { return a + b; }

// // names function expression
// const sum = function sum(a, b) { return a + b; }

// // ES6 arrow function
// const sum = (a, b) => a + b;

// Slide 141 : method properties
const contact = {
  firstName: 'Romain',
  hello(name = 'John') {
    // default param 136
    console.log('Hello ' + name);
  },
  // hello: function() {
  //   console.log('Hello ' + this.firstName);
  // }
};

// Bonne pratiques :
// - si c'est une fonction classique function declaration
// ou arrow function (pour un syntaxe plus courte)
// - si c'est une méthode : method properties
// - si c'est un callback : arrow function

contact.hello();

// Slide 138
// REST Params
// conversion : liste de valeurs -> tableau

//       sum(1, 2, 3, 4)
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4)); // 10

// Slide 139
// SPREAD Operator
// conversion : tableau -> liste de valeurs
//       multiply( ...nbs   )
function multiply(a, b, c, d) {
  return a * b * c * d;
}

const nbs = [1, 2, 3, 4];
// console.log(multiply(nbs[0], nbs[1], nbs[2], nbs[3]));
console.log(multiply(...nbs));

// Avant ES6 pour cloner tableau
// const clone = nbs.slice();

// Avec le SPREAD operator
const clone = [...nbs];

const x = 1;

// Slide 140 Shorthand property
const coordsA = {
  x,
};

console.log(coordsA); // {x: 1}

// Slide 143 Destructurer un tableau
const fullName = 'Romain Bohdanowicz';
// const tmp = fullName.split(' ');
// const prenom = fullName[0];
// const nom = fullName[1];
//    ['Romain', 'Bohdanowicz']
const [prenom, nom] = fullName.split(' ');

// combiné avec REST params et default
const ligneCsv = 'a,b,c,d,e,f';
//    ['a' , 'b' , 'c'       , 'd', 'e', 'f']
const [col1, col2, col3 = 'c', ...cols] = ligneCsv.split(',');

// Slide 145 Destructurer un objet
const contactRomain = {
  prenom: 'Romain',
  nom: 'Bohdanowicz',
};

//    { prenom: 'Romain', nom: 'Bohdanowicz'  }
const { prenom: firstName } = contactRomain.prenom;
console.log(firstName); // Romain;

const coords3D = { x: 1, y: 2, z: 3 };
const { z = 0 } = coords3D;

// use case : options

// Slide 147 : class 147

// function Contact(firstName) {
//   this.firstName = firstName;
// }

// Contact.prototype.hello = function() {
//   return 'Hello ' + this.firstName;
// }

class Contact {
  constructor(firstName) {
    this.firstName = firstName;
  }
  hello() {
    return 'Hello ' + this.firstName;
  }
}

class User extends Contact {
  constructor(firstName, username) {
    super(firstName);
    this.username = username;
  }
  hello() {
    return super.hello() + ', username : ' + this.username; 
  }
}

// Dans Object : assign...
// Dans String : startsWith, repeat...
// Dans Array : find, findIndex...
// Nouveaux APIs : Promise, Map, Set, Proxy...

// Exemple StartsWith
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/startsWith#Sp%C3%A9cifications
// ECMAScript 2015 (6th Edition, ECMA-262)
// La définition de 'String.prototype.startsWith' dans cette spécification.	Standard	Définition initiale.