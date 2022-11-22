'use strict'

const check = document.querySelectorAll('.interest__check');

for (let i = 0; i < 4; i = i + 3) {
  check[i].addEventListener('change', function () {

    if (check[i].checked) {
      check[i + 1].checked = true;
      check[i + 2].checked = true;
    } else {
      check[i + 1].checked = false;
      check[i + 2].checked = false;
    }
  });
}