'use strict';

const readline = require('readline');

// 1 - Prévoir des valeurs par défaut pour min et max
function genererAlea(min = 0, max = 100) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dejaJoues(essais = []) {
  if (!essais.length) {
    return;
  }

  // 2 - Utiliser un template literal
  console.log(`Vous avez déjà joué : ${essais.join(' | ')}...`);
}

// 3 - Utiliser Class
class Jeu {
  constructor(options = {}) {
    // 4 - Utiliser un param par défaut
    // options = options || {};

    // 5 - En s'inspirant de coords3D dans mon exemple
    // - Destructurer l'objet
    // - Prévoir des valeurs par défaut
    // - shortand property
    // const min = options.min || 0;
    // const max = options.max !== undefined ? options.max : 100;
    const { min = 0, max = 100 } = options;

    // Pour créer les propriété min et max plutot que les variables
    // locales :
    // Object.assign(this, { min: 0, max: 100 }, options);

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = genererAlea(min, max);
    this.essais = [];
  }
  loop() {
    dejaJoues(this.essais);
    this._rl.question('Quel est le nombre ? ', (saisie) => {
      // 6 - Remplacer parseInt et isNaN par des méthodes de Number
      // MDN Number
      const entierSaisi = Number.parseInt(saisie);

      if (Number.isNaN(entierSaisi)) {
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
  }
}

const game = new Jeu({
  max: 10,
});
game.loop();
