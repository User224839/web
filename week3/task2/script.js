'use strict';

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (text === '') return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = text;

  const button = document.createElement('button');
  button.textContent = 'Delete';

  checkbox.addEventListener('change', () => {
    span.classList.toggle('done');
  });

  button.addEventListener('click', () => {
    list.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);

  list.appendChild(li);
  input.value = '';
});
