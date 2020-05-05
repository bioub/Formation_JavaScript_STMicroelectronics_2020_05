const readline = require('readline');



// Enoncé slide 68
function genererAlea(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dejaJoues(essais) {
  // Optional Chaining (ES2020)
  // if (essais?.length) {
  if (!(essais && essais.length)) {
    return;
  }

  console.log('Vous avez déjà joué : ' + essais.join(' | '));
}

function loop() {
  dejaJoues(essais);
  rl.question('Quel est le nombre ? ', (saisie) => {
    const entierSaisi = parseInt(saisie);

    if (isNaN(entierSaisi)) {
      console.error('Erreur : Il faut saisir un nombre');
      return loop();
    }

    console.log('Vous avez saisi ' + entierSaisi);

    essais.push(entierSaisi)
  
    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      loop();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      loop();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}


// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// const entierAlea = genererAlea(0, 100);
// const essais = [];
// loop();

// Exercice : Adapter le code précédent
// avec une fonction constructeur (exemple contact)
function Jeu(options) {
  // options.min et options.max pour récupérer vos valeurs
  // définir ici 3 propriétés : 
  // rl, entierAlea, essais
}

Jeu.prototype.loop = function() {
  // adapter la fonction loop
  // pour quelle retrouve les valeurs de rl, entierAlea, essais
  // dans l'objet, ex: this.essais
}

const game = new Jeu({
  max: 10,
});
game.loop();

// il faut que toutes ces versions fonctionnent
// new Jeu(); (min et max defaut 0 et 100)
// new Jeu({}); (min et max defaut 0 et 100)
// new Jeu({ min: 50 }); // entre 50 et 100 (max défaut 100)
// new Jeu({ max: 50 }); // entre 0 et 50 (min défaut 0)
// new Jeu({ min: 10, max: 20 }); // entre 0 et 20
