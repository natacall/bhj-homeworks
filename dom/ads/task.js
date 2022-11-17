'use strict'

debugger

let rotator = Array.from(document.querySelectorAll('.rotator__case'));
let rotatorIndex = 0;

function rotation() {
  rotator.forEach((el) => {
    el.classList.remove('rotator__case_active');
  });
  
  if (rotatorIndex + 1 == rotator.length) {
    rotatorIndex = 0;
  } else {
    rotatorIndex++;
  }
  rotator[rotatorIndex].classList.toggle('rotator__case_active');
}
setInterval(rotation, 1000);