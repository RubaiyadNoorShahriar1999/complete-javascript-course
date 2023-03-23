'use strict';
const scoreElement1 = document.getElementById('score--0');
const scoreElement2 = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const currentElement = document.querySelector('.current-score');

scoreElement1.textContent = 0;
scoreElement2.textContent = 0;
diceElement.classList.add('hidden');
let currentScore = 0;

rollBtn.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  if (dice != 1) {
    currentScore += dice;
    currentElement.textContent = currentScore;
    console.log(currentScore);
  }
});
