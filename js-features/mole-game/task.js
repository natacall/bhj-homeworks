'use strict'

let getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let win = parseInt(deadMole.textContent);
let lost = parseInt(lostMole.textContent);

function checkGame(deadMole, lostMole) {
  if (deadMole === 10) {
    alert('Кроты мертвы!');
    deadMole.textContent = 0; 
    lostMole.textContent = 0;
  } else if (lostMole === 5) {
    alert('Кроты захватили планету!');
    deadMole.textContent = 0;
    lostMole.textContent = 0;
  };
};

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function () {
    if (this.className.includes('hole_has-mole')) {
      deadMole.textContent++;
    } else {
      lostMole.textContent++;
    };
    checkGame(win, lost);
  };
};