// URL
// GET https://jsonplaceholder.typicode.com/todos
// -> Liste de Todos
const urlAPI = 'https://jsonplaceholder.typicode.com/todos'

export function fetchTodos() {
  return fetch(urlAPI, { method: 'GET', /* body: '' */ })
    .then((res) => res.json()) // callback de succès
    .then((todos) => todos.slice(0, 10)) // pagination
    .catch((err) => console.log(err)); // callback d'erreur
}

// Exercice
// Faire la requete delete au clic du bouton moins
// DELETE https://jsonplaceholder.typicode.com/todos/1
// -> Supprimer la todo dont l'id est l'URL (ici 1)
// 

// Faire la requete POST au submit du form
// POST https://jsonplaceholder.typicode.com/todos
// -> Ajouter une todo
// fetch(urlAPI, { method: 'POST', /* body: '{"completed": false, "title": "ABC"}' */ })
