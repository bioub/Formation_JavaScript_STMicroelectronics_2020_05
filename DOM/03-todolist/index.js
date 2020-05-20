import { addTodo } from './todo.js';
import { removeElement } from './dom.js';
import { fetchTodos, postTodo, deleteTodo } from './api.js';

/** @type {HTMLInputElement} */
const todoToggleCheckEl = document.querySelector('.todo-toggle-check');

/** @type {HTMLInputElement} */
const todoInputEl = document.querySelector('.todo-input');

/** @type {HTMLFormElement} */
const todoFormEl = document.querySelector('.todo-form');

/** @type {HTMLDivElement} */
const todoListEl = document.querySelector('.todo-list');



// Interdit les chiffres
todoInputEl.addEventListener('keydown', (event) => {
  // Manipuler le CSS et modifier aléatoire la couleur de fond
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  todoInputEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  // Exercice 1 (ex slide 264)
  // Stocker dans le localStorage le contenu du champs (à la clé "saisie")
  // à la frappe clavier (ici)

  // Exercice 2 (ex slide 264)
  // Au chargement de la page remplir le champs avec le contenu du storage

  // event type KeyboardEvent
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    event.preventDefault();
  }
});

todoFormEl.addEventListener('submit', (event) => {
  event.preventDefault(); // element a une action par défaut sur cet événement
  // coords du click event.clientX, event.clientY
  // event.target === todoBtnAddEl
  const todo = {
    // id: Math.floor(Math.random() * 1000),
    title: todoInputEl.value,
    completed: false,
  };

  // démarrer un loader 
  postTodo(todo).then((todoFromApi) => {
    // arrêter un loader 
    console.log(todoFromApi);
    addTodo(todoFromApi, todoListEl);
  })
});

todoToggleCheckEl.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxEls = todoListEl.querySelectorAll('input[type=checkbox]');

  for (const checkbox of checkboxEls) {
    checkbox.checked = todoToggleCheckEl.checked;
  }
});

todoListEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const clickedEl = event.target;

  // Ecoute dans la phase de target
  if (clickedEl.classList.contains('todo-btn-remove')) {
    const id = clickedEl.parentElement.dataset.todoId;

    // Disable le bouton pour ne pas qu'on clique 2 fois
    clickedEl.disabled = true;

    // Manipuler le CSS pour griser la ligne en cours de suppression
    clickedEl.parentElement.classList.add('pending-delete');
    // clickedEl.parentElement.style.opacity = '0.5';

    deleteTodo(id).then(() => {
      removeElement(clickedEl.parentElement);
    });
  }
});

// Au chargement on envoie une requete pour récupérer les données
fetchTodos().then((todos) => {
  for (const todo of todos) {
    addTodo(todo, todoListEl);
  }
});

/* Exercice 4
Ecouter le click de todoListEl au lieu du clic du bouton moins
et vérifier grace à la phase de target que le clic à eu
lieu sur un bouton moins avant de supprimer
Exemple slide 240
*/

/*
Exercice 1 :
Compléter le callback du click du bouton plus pour créer également
- la checkbox <input type="checkbox" class="todo-check">
- le bouton moins <button class="todo-btn-remove">-</button>
Au final que chaque soit :
<div>
  <input type="checkbox" class="todo-check">
  <input type="text" value="Acheter du pain">
  <button class="todo-btn-remove">-</button>
</div>
Indice :
- innerText : HTMLElement
- className : Element
- HTMLInputElement
- HTMLButtonElement

Exercice 2 :
Au clic du bouton moins, supprimer la ligne
Indice :
- le bouton moins n'existe pas au chargement de la page
(vous ne pouvez pas écouter le click au début du fichier
mais vous pouvez l'écouter dans le callback du click du bouton plus)
- removeChild ou remove : Element
- le bouton sur lequel vous avez cliqué : event.target
- parentNode ou parentElement pour remonter dans l'arbre

Exercice 3 :
Au click de la checkbox <input type="checkbox" class="todo-toggle-check"> <!-- tout cocher/décocher-->
Cocher ou décocher toutes les autres
- querySelectorAll
- boucler avec for .. of
- checked : HTMLInputElement
*/
