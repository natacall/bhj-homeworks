'use strict'

const book = document.querySelector('.book');
const buttons = document.querySelector('.book__control');

for (let control of buttons.children) {
  control.addEventListener('click', change)
}

function change(event) {
  if (this.dataset.size === 'big') {
    book.classList.toggle('book_fs-big');
  } else if (this.dataset.size === 'small') {
    book.classList.toggle('book_fs-small');
  } else {
    book.classList.remove('book_fs-small', 'book_fs-big');
  }
  event.preventDefault();
  
  for (let fonts of document.querySelectorAll('.font-size')) {
    fonts.classList.remove('font-size_active');
  }

  this.classList.add('font-size_active');
}