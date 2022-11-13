'use strict';

const value = document.querySelector('div.dropdown__value');
const links = document.querySelectorAll(...'a.dropdown__link');

function menuAction() {
  let menuList = document.querySelector('ul.dropdown__list')
  menuList.classList.toggle('dropdown__list_active')
}
value.addEventListener('click', menuAction);

links.forEach((link) => {
  link.onclick = function () {
    document.querySelector('div.dropdown__value').textContent = link.textContent;
    return false;
  };
  link.addEventListener('click', menuAction);
})