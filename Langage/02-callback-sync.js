const essais = [12, 34, 46, 57];

// Depuis la première version de JS
for (let i = 0; i < essais.length; i++) {
  const nb = essais[i];
  console.log(nb);
}

// for .. of (ES2015)
for (const nb of essais) {
  console.log(nb);
}

// Arrow function (ES2015)
// const fct = (nb) => {
//  console.log(nb);
// };
// équivalent à :
// const fct = function (nb) {
//   console.log(nb);
// };

// methode forEach (ES5)
essais.forEach((nb) => {
  console.log(nb);
});

// Programmation fonctionnelle
// Algo : boucler sur le carré de tous les nombres pairs
console.time('algo');
essais
  .filter((nb) => nb % 2 === 0)
  .map((nb) => nb ** 2)
  .forEach((nb) => console.log(nb));

const essaisFiltres = essais.filter((nb) => nb % 2 === 0);
const essaisTransformes = essaisFiltres.map((nb) => nb ** 2);
essaisTransformes.forEach((nb) => console.log(nb));
console.timeEnd('algo');

console.log('FIN');

// pile d'appel
// ^
// |                                   lg   lg   lg
// |=> - => - => - =>   => - => - =>   => - => - =>
// |filter            - map          - forEach      - lg
// +-------------------------------------------------------> temps
//                                     144  1156 2116 FIN
