'use strict'

const timer = document.getElementById("timer");

function countdown() {
  let newTime = timer.textContent--;
  
  if (newTime === 0) {
    alert("Вы победили в конкурсе");
    clearInterval(timerId);
  }
}
let timerId = setInterval(countdown, 1000);