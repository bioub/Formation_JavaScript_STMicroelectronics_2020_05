import { addTodo } from './todo.js';
import { removeElement } from './dom.js';
import { fetchTodos } from './api.js';

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
    id: Math.floor(Math.random() * 1000),
    title: todoInputEl.value,
    completed: false,
  };

  addTodo(todo, todoListEl);
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
    removeElement(clickedEl.parentElement);
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
