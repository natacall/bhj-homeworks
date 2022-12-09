'use strict'


const modalClose = document.getElementsByClassName('modal__close');
const modalShow = document.getElementById('subscribe-modal');

function closeWindow() {
  modalShow.className = 'modal';
  document.cookie = 'window=close';
 };

 window.onload = () => {
  const getCookie = (name) => {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
     if (parts.length === 2) {
      return parts
        .pop()
        .split(";")
        .shift()
    }; 
         modalShow.className = 'modal modal_active';
  };

  getCookie('window');
 }
 modalClose[0].addEventListener('click', closeWindow);

 const modalMain = document.getElementById('subscribe-modal');

function getActive() {
  let stat = getCookie('modalActive');
  if ((stat === false || stat === undefined)) {
    modalMain.classList.add('modal_active');
  }
}

 function getClose() {
  modalMain.classList.remove('modal_active');
  document.cookie = 'modalActive=True';
}

function getCookie (name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
           return parts.pop().split(";").shift();
  }
 }

 document.addEventListener('DOMContentLoaded', getActive);
 modalClose.addEventListener('click', getClose);