'use strict'

const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const form = document.querySelector('.tasks__control');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (taskInput.value.length > 0) {
    tasksList.insertAdjacentHTML('beforeEnd', 
    `<div class="task">
        <div class="task__title">
        ${taskInput.value} 
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`);
  }
  taskInput.value = '';
})

tasksList.addEventListener('click', (event) => {
  const remove = event.target.matches('.task__remove');
  const task = event.target.closest('.task');

  if (remove) {
    task.remove();
    event.preventDefault();
  }
})