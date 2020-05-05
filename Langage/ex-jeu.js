const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

const entierAlea = genererAlea(0, 100);
const essais = [];

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
loop();