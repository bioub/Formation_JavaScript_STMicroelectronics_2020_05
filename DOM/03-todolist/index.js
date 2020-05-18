/** @type {HTMLInputElement} */
const todoToggleCheckEl = document.querySelector('.todo-toggle-check');

/** @type {HTMLInputElement} */
const todoInputEl = document.querySelector('.todo-input');

/** @type {HTMLButtonElement} */
const todoBtnAddEl = document.querySelector('.todo-btn-add');

/** @type {HTMLDivElement} */
const todoListEl = document.querySelector('.todo-list');

todoBtnAddEl.addEventListener('click', (event) => {
  // coords du click event.clientX, event.clientY
  // event.target === todoBtnAddEl
  const divEl = document.createElement('div');

  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.value = todoInputEl.value;
  divEl.appendChild(inputEl);

  todoListEl.appendChild(divEl);
});

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