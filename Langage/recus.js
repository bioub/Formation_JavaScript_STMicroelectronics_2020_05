function afficheTropGrandOuPetit(entierAlea, entierSaisi) {
  if (entierAlea === entierSaisi) {
    console.log('Gagné');
  } else if (entierSaisi > entierAlea) {
    console.log('Trop grand');
  } else {
    console.log('Trop petit');
  }
}

function afficheTropGrandOuPetit(entierAlea, entierSaisi) {
  if (entierSaisi > entierAlea) {
    console.log('Trop grand');
  } else if (entierSaisi < entierAlea) {
    console.log('Trop petit');
  } else console.log('Gagné');
}

function afficheTropGrandOuPetit(entierAlea, entierSaisi) {
  if (entierAlea < entierSaisi) {
    console.log('Trop grand');
  } else if (entierAlea > entierSaisi) {
    console.log('Trop petit');
  } else {
    console.log('Gagné');
  }
}

function afficheTropGrandOuPetit(entierAlea, entierSaisi) {
  if (entierSaisi > entierAlea) {
    console.log('trop grand');
  } else if (entierSaisi < entierAlea) {
    console.log('trop petit');
  } else {
    console.log('gagné');
  }
}

function genererAlea(min, max) {
  var a;
  do {
    a = Math.floor(Math.random() * Math.floor(max));
  } while (a < min);

  return a;
}

function genererAlea(min, max) {
  min1 = Math.ceil(min);
  max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
}

function genererAlea(min, max) {
  console.log(Math.random() * (max - min) + min);
}

function genererAlea(min, max) {
  let rand = Math.random();
  result = Math.floor(Math.random() * 100);
  return result;
}

function dejaJoues(essais) {
  var msg = '';

  essais.forEach((element) => {
    msg += ' ' + element;
    msg += ',';
  });

  var newStr = msg.substring(0, msg.length - 1);
  console.log('Vous avez déjà joué :' + newStr);
}

function dejaJoues(essais) {
  var str = 'Vous avez déjà joué :';
  for (let index = 0; index < essais.length; index++) {
    if (index !== essais.length - 1) {
      str += essais[index] + ',';
    } else str += essais[index];
  }
  console.log(str);
}

function dejaJoues(essais) {
  content = '';
  if (essais == null) {
    console.log('input empty');
  } else {
    for (var i = 0; i < essais.length; i++) {
      content = content + essais[i] + ',';
    }
    console.log('Vous avez déjà joué ' + content);
  }
}

function dejaJoues(essais) {
  if (essais.length != 0) {
    console.log('vous avez déjà joué : ' + essais);
  }
}

function afficherErreur(saisie) {
  if (typeof saisie == 'number') return;

  if (typeof saisie == 'string') {
    try {
      const re = /[0-9]+/;
      saisie.match(re)[0];
    } catch (error) {
      console.log(saisie + ' n est pas un nombre');
    }
  }
}

function afficherErreur(saisie) {
  if (isNaN(saisie)) {
    console.log("Erreur :  n'est pas un nombre");
  }
}

function afficherErreur(saisie) {
  if (isNaN(saisie)) {
    console.log(' ');
  } else {
    console.log('Error ');
  }
}

function afficheErreur(saisie) {
  if (typeof saisie != 'number') {
    console.error('Erreur : "' + saisie + '" n\'est pas un nombre');
  }
}
