function afficheTropGrandOuPetit(entierAlea, entierSaisi) {
  if (entierSaisi < entierAlea) {
    console.log('Trop petit');
  } else if (entierSaisi > entierAlea) {
    console.log('Trop grand');
  } else {
    console.log('Gagné');
  }
}

afficheTropGrandOuPetit(45, 60); // Trop grand
afficheTropGrandOuPetit(45, 10); // Trop petit
afficheTropGrandOuPetit(45, 45); // Gagné

function genererAlea(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const entierAlea = genererAlea(0, 100); // 23
console.log(entierAlea); // 45

/**
 *
 * @param {number[]} essais
 */
function dejaJoues(essais) {
  // Optional Chaining (ES2020)
  // if (essais?.length) {
  if (!(essais && essais.length)) {
    return;
  }

  console.log('Vous avez déjà joué : ' + essais.join(' | '));
}

dejaJoues([12, 34, 46, 57]); // Vous avez déjà joué : 12, 34, 46, 57...

/**
 *
 * @param {string} saisie
 */
function afficherErreur(saisie) {
  const entierSaisi = parseInt(saisie, 10);

  if (isNaN(entierSaisi)) {
    // Template literal ES6/ES2015
    throw new Error(`Erreur : "${saisie}" n'est pas un nombre`);
    // Erreur : "abc" n'est pas un nombre
  }
}

try {
  afficherErreur('123'); //
  afficherErreur('abc'); // Erreur : "abc" n'est pas un nombre
} catch (err) {
  console.log(err.message);
}
