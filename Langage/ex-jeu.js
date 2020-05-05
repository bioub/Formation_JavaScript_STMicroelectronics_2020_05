const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Enoncé slide 68

rl.question('Quel est le nombre ? ', (saisie) => {
  // saisie est type string (à vous de convertir)
  console.log('Vous avez saisi ' + saisie);

  // rejouer (boucler en asynchrone)

  // arreter le programme
  rl.close();
});

