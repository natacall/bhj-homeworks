'use strict';

let modalMain = document.getElementById('modal_main')
let modalSuccess = document.getElementById('modal_success')
modalMain.classList.add('modal_active');

document.querySelector('div.modal a.btn_danger').onclick = function () {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
  };

let arr = Array.from(document.querySelectorAll('div.modal__close_times'));

function closePopup() {
  arr.forEach((modal) => {
    modal.onclick = function () {
      modal.closest('div.modal').classList.remove('modal_active');
    };
  });
};

closePopup();