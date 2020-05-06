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
  options = options || {};
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;

  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  this.entierAlea = genererAlea(min, max);
  this.essais = [];
}

Jeu.prototype.loop = function () {
  dejaJoues(this.essais);
  this._rl.question('Quel est le nombre ? ', (saisie) => {
    const entierSaisi = parseInt(saisie);

    if (isNaN(entierSaisi)) {
      console.error('Erreur : Il faut saisir un nombre');
      return this.loop();
    }

    console.log('Vous avez saisi ' + entierSaisi);

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      this.loop();
    } else if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      this.loop();
    } else {
      console.log('Gagné');
      this._rl.close();
    }
  });
};

const game = new Jeu({
  max: 10
});
game.loop();

// il faut que toutes ces versions fonctionnent
// new Jeu(); (min et max defaut 0 et 100)
// new Jeu({}); (min et max defaut 0 et 100)
// new Jeu({ min: 50 }); // entre 50 et 100 (max défaut 100)
// new Jeu({ max: 50 }); // entre 0 et 50 (min défaut 0)
// new Jeu({ min: 10, max: 20 }); // entre 0 et 20

// Devoirs :
// - cet exercice
// - regarder la vidéo (au moins les 20 premières minutes)
// In the loop https://www.youtube.com/watch?v=cCOL7MC4Pl0
