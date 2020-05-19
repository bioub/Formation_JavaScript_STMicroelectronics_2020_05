import { removeElement } from "./dom.js";

/**
 * Add new todo row
 * @param {object} todo A todo to insert
 * @param {string} todo.title Todo title
 * @param {boolean} todo.completed Toto complete status
 * @param {number} todo.id Todo id in http backend
 * @param {HTMLElement} container 
 */
export function addTodo(todo, container) {
  const divEl = document.createElement('div');
  divEl.classList.add('todo-row');
  divEl.dataset.todoId = todo.id;

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todo-check';
  checkboxEl.checked = todo.completed;
  divEl.appendChild(checkboxEl);

  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.value = todo.title; 
  divEl.appendChild(inputEl);

  const btnRemoveEl = document.createElement('button');
  btnRemoveEl.innerText = '-';
  btnRemoveEl.className = 'todo-btn-remove';
  divEl.appendChild(btnRemoveEl);

  btnRemoveEl.addEventListener('click', (event) => {
    /** @type {HTMLButtonElement} */
    const btn = event.target;
    
    removeElement(btn.parentElement);
  });

  container.appendChild(divEl);
}
