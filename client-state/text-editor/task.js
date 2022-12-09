'use strict'


const editor = document.getElementById('editor');
const reset = document.getElementById('reset');

if (localStorage.editText !== null) {
  editor.value = localStorage.editText;
}

window.addEventListener('input', () => {
  const textArea = editor.value;
  localStorage.setItem('editText', textArea);
})

reset.addEventListener('click', () => {
  localStorage.clear();
  editor.value = '';
});