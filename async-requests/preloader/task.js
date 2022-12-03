'use strict'


const loader = document.querySelector('.loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState === xhr.DONE && xhr.status == 200) {
    loader.classList.remove('loader_active');
    const valute = JSON.parse(xhr.responseText).response.Valute;

    for (let key in valute) {
      items.insertAdjacentHTML('beforeEnd', `
        <div class="item">
          <div class="item__code">
              ${valute[key].CharCode}
          </div>
          <div class="item__value">
              ${valute[key].Value}
          </div>
          <div class="item__currency">
              руб.
          </div>
        </div>`);
    }
  };
};