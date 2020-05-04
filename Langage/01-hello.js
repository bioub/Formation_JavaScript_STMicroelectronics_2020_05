const prenoms = ['Romain', 'Jean', 'Eric'];

/**
 * Dit bonjour
 * @param {string} prenom Le prénom
 * @returns {string} Le message
 */
function hello(prenom = '') {
  return 'Hello ' + prenom.toUpperCase();
}

for (let i = 0; i < prenoms.length; i++) {
  const elt = prenoms[i];
  console.log(hello(elt));
}