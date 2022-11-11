'use strict';

const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const slider = document.querySelectorAll('.slider__item');

let index = 0;

function deactivation(index) {
    slider.item(index).classList.remove('slider__item_active');
}

function activation(index) {
    slider.item(index).classList.add('slider__item_active');
}

prev.addEventListener('click', () => {
    deactivation(index);
    index = (index === 0) ? Array.from(slider).length - 1 : index - 1;
    activation(index);
})

next.addEventListener('click', () => {
    deactivation(index);
    index = (index > Array.from(slider).length - 2) ? 0 : index + 1;
    activation(index);
})

