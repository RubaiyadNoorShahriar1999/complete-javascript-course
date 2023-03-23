'use strict';

const scoreElement1 = document.getElementById('score--0');
const scoreElement2 = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const currentElement1 = document.querySelector('#current--0');
const currentElement2 = document.querySelector('#current--1');

scoreElement1.textContent = 0;
scoreElement2.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let playerNumber = 0;

rollBtn.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  if (dice != 1) {
    currentScore += dice;
    document.getElementById(`current--${playerNumber}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${playerNumber}`).textContent = 0;
    currentScore = 0;
    playerNumber = playerNumber === 0 ? 1 : 0;
  }
});
