'use strict'

const getHole = index => document.getElementById(`hole${index}`);
const deadMole = document.getElementById('dead');
const lostMole = document.getElementById('lost');
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