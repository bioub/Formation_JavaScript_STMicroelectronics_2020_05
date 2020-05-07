// ES7 / ES2016

// Exponentiation operator
console.log(2 ** 3); // 8

// Includes tableaux
console.log(['Romain', 'Jean'].includes('Jean')); // true
console.log(['Romain', 'Jean'].includes('Eric')); // false

// ES8 / ES2017

// Virgule finale sur les fonction (appel ou déclaration)
console.log(
  'jfkdgjhgfdk gkdfjh gdkfj hgdfkj hgdfkj hgkjfdhgkj dfg',
  'jfkdgjhgfdk gkdfjh gdkfj hgdfkj hgdfkj hgkjfdhgkj dfg',
  'jfkdgjhgfdk gkdfjh gdkfj hgdfkj hgdfkj hgkjfdhgkj dfg',
);

const contact = {
  firstName: 'Romain',
  lastName: 'Bohdanowicz',
};

// En ES5
console.log(Object.keys(contact)); // [ 'firstName', 'lastName' ]

// En ES8
console.log(Object.values(contact)); // [ 'Romain', 'Bohdanowicz' ]
console.log(Object.entries(contact));
// [
//   [ 'firstName', 'Romain' ],
//   [ 'lastName', 'Bohdanowicz' ]
// ]
for (const [key, value] of Object.entries(contact)) {
  console.log(key, value);
}

// En ES9 / ES2018

// REST / SPREAD sur des objets (...)

// clone en ES6
// const clone = Object.assign({}, contact);

// cloner avec SPREAD
const clone = { ...contact };

const coords3d = { x: 1, y: 2, z: 3 };
// REST sur un objet
const { z, ...coords2d } = coords3d;
console.log(coords2d); // { x: 1, y: 2 }

// Slide 192
const emojiStr = 'LOL 😂😅🤣 Awesome !!! 😜';
console.log(emojiStr.match(/\p{Emoji}/gu)); // [ '😂', '😅', '🤣', '😜' ]

// ES10 / ES2019
function throwError() {
  throw new Error();
}

// Optional catch binding
try {
  throwError();
} catch {
  console.log('Erreur');
}

// Object.fromEntries()
const contacts = [
  {
    id: 123,
    prenom: 'Romain',
    nom: 'Bohdanowicz',
  },
  {
    id: 456,
    prenom: 'Jean',
    nom: 'Dupont',
  },
];

// rechercher par id
const contact123 = contacts.find((c) => c.id === 123);
console.log(contact123); // { id: 123, prenom: 'Romain', nom: 'Bohdanowicz' }

const contactsMap = Object.fromEntries(contacts.map((c) => [c.id, c]));
// const contactsMap = {
//   123: {
//     id: 123,
//     prenom: 'Romain',
//     nom: 'Bohdanowicz',
//   },
//   456: {
//     id: 456,
//     prenom: 'Jean',
//     nom: 'Dupont',
//   },
// };

const contact456 = contactsMap[456];
console.log(contact456); // { id: 456, prenom: 'Jean', nom: 'Dupont' }

// flatten
console.log([[123], ['a'], ['b', 'c']].flat(Infinity)) // [ 123, 'a', 'b', 'c' ]

// Groupe qui créer la norme ECMAScript : TC39
// https://github.com/tc39/proposals

// Stage 4 (Normé)
// https://github.com/tc39/proposals/blob/master/finished-proposals.md

// ES2020

function Jeu(options) {
  // Nullish coalescing operation (affecte opérande de droite)
  // si la gauche est nullish (undefined ou null uniquement)
  // false (undefined, null, 0, '', false)
  // Optional Chaining
  // const min = options?.min ?? 0;
  // const max = options?.max ?? 100;
}

function sum(a, b) {
  // en mode non-strict result est global
  // en mode strict : ReferenceError
  // pour créer un variable globale en mode strict
  // on peut étendre l'objet global

  // En 2020 l'objet s'appelle globalThis quelque soit la plateforme
  globalThis.result = a + b;
}

// https://github.com/tc39/proposals

// Class fields
// https://github.com/tc39/proposal-class-fields

class Contact {
  #firstName = 'Romain';
  hello() {
    console.log('Hello ' + this.#firstName);
  }
}

const romain = new Contact();
romain.hello();
console.log(romain.firstName) // undefined