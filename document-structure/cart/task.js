'use strict'
debugger
const add = Array.from(document.querySelectorAll('.product__add'));
const quantity = document.querySelectorAll('.product__quantity-controls');
const products = document.querySelector('.cart__products');

for (let i = 0; i < add.length; i++) {
  add[i].addEventListener('click', function () {
    const currentProduct = this.closest('.product');
    const datasetId = currentProduct.dataset.id;

    for (let i = 0; i < products.children.length; i++) {
      if (products.children[i].dataset.id === datasetId) {
        let productCount = products.children[i].querySelector('.cart__product-count');
        productCount.innerText = Number(productCount.innerText) + Number(currentProduct.querySelector('.product__quantity-value').innerText);
        return false;
      }
    }

    products.insertAdjacentHTML('beforeend', 
    `<div class="cart__product" data-id="${datasetId}"><img class="cart__product-image" src="${currentProduct.querySelector('.product__image').src}"><div class="cart__product-count">${currentProduct.querySelector('.product__quantity-value').innerText}</div></div>`);
  });
}

for (let i = 0; i < quantity.length; i++) {
  quantity[i].addEventListener('click', function () {
    let quantityValue = Number(this.querySelector('.product__quantity-value').innerText);

    if (event.target.classList.contains('product__quantity-control_dec')) {
      if (quantityValue > 1) {
        quantityValue --;
      } else {
        quantityValue = 1;
      }
    }
    else {
      quantityValue ++;
    }
    this.querySelector('.product__quantity-value').innerText = quantityValue;
  });
}