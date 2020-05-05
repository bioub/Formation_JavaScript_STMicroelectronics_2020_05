console.log(typeof Math); // object

// TypeError: Math.sum is not a function
// Math.sum(1, 2);

// Extensibilité (ajouter dynamiquement clé/valeur)
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3
console.log(Object.isExtensible(Math)); // true

delete Math.sum;

// TypeError: Math.sum is not a function
// Math.sum(1, 2);

// Mauvaise pratique d'étendre les objets normés

// Pour créer un nouvel objet

// Syntaxe : object literal
// créer l'objet directement
const coords = {
  x: 1,
  y: 2
};
console.log(typeof coords); // object

// Extensibilité
coords.z = 3;

const MyMath = {
  sum: (a, b) => a + b
};

console.log(MyMath.sum(1, 2)); // 3

// Attention ! Ne pas ajouter de méthodes dans des objets
// créés plusieurs avec Object Literal

const contactA = {
  firstName: 'Romain',
  hello() {
    console.log('Hello my name is ' + this.firstName);
  }
};

contactA.hello();

const contactB = {
  firstName: 'Eric',
  hello() {
    console.log('Hello my name is ' + this.firstName);
  }
};

contactB.hello();

// en JS une fonction est un objet

// comparer les références (est-ce le même objet ?) :
console.log(contactA.hello === contactB.hello); // false



// Autre syntaxe de création
// constructor function
function Contact(firstName) {
  // pseudo variables (créées au moment de l'appel)
  // console.log(this);
  // console.log(arguments);

  // les propriétés privées n'existent pas encore (prévu)
  // convention : préfixer les propriétés privées par _
  this._firstName = firstName;

  // définir une fonction ici revient à créer
  // une fonction par objet
  // this.hello = function() {}
}

// Défini ici, la fonction n'est pas dupliquée
// Utiliser le prototype
// Ex: String.prototype.charCodeAt()

Contact.prototype.hello = function() { // ! à ne pas utiliser les => ici
  console.log('Hello my name is ' + this._firstName);
};

const contact1 = new Contact('Romain');
console.log(typeof contact1); // object
// si préfixe _ ne pas utiliser les propriétés
// console.log(contact1._firstName); // Romain
// contact1._firstName = 'Toto';
// console.log(contact1._firstName); // Toto
contact1.hello();


const contact2 = new Contact('Eric');
contact2.hello();

console.log(contact1.hello === contact2.hello); // true
