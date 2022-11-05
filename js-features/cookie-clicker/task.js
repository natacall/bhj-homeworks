'use strict'

const cookieImage = document.getElementById("cookie");
const click = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("click__speed");
let nowTime = Date.now();
let previousClick = 0;

cookieImage.onclick = function () {
  let currentClick = click.textContent++;

  if (cookieImage.width === 200) {
    cookieImage.width += 50
  } else if (cookieImage.width === 250) {
    cookieImage.width -= 50
  }   

  clickSpeed.textContent = (((Date.now() - nowTime) / 1000) / (currentClick - previousClick)).toFixed(2);
};