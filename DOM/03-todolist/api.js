// URL
// GET https://jsonplaceholder.typicode.com/todos
// -> Liste de Todos
const urlAPI = 'https://jsonplaceholder.typicode.com/todos';

export function fetchTodos() {
  return fetch(urlAPI, { method: 'GET' /* body: '' */ })
    .then((res) => res.json()) // callback de succès
    .then((todos) => todos.slice(0, 10)) // pagination
    .catch((err) => console.log(err)); // callback d'erreur
}

// Exercice
// Faire la requete delete au clic du bouton moins
// DELETE https://jsonplaceholder.typicode.com/todos/1
// -> Supprimer la todo dont l'id est l'URL (ici 1)
export function deleteTodo(id) {
  return fetch(urlAPI + '/' + id, { method: 'DELETE' /* body: '' */ })
    .then((res) => res.json())
    .catch((err) => console.log(err)); // callback d'erreur
}

// Faire la requete POST au submit du form
// POST https://jsonplaceholder.typicode.com/todos
// -> Ajouter une todo
// fetch(urlAPI, { method: 'POST', /* body: '{"completed": false, "title": "ABC"}' */ })
// Header: Content-type: application/json
/**
 *
 * @param {object} todo
 * @param {boolean} todo.completed
 * @param {string} todo.title
 */
export function postTodo(todo) {
  return fetch(urlAPI, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err)); // callback d'erreur
}
