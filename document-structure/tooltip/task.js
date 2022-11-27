'use strict'

const arr = document.querySelectorAll('.has-tooltip');

[...arr].map(item => {
  item.insertAdjacentHTML('afterend', '<div class="tooltip" style="left: 0; top: 0"></div>');
  item.onclick = function () {
    item.nextSibling.classList.toggle('tooltip_active');
    item.nextSibling.textContent = item.title;
    item.nextSibling.style.top = `${item.getBoundingClientRect().bottom}px`;
    item.nextSibling.style.left = `${item.getBoundingClientRect().left}px`;
    return false;
  }
})