'use strict';

const playerElement1 = document.querySelector('.player--0');
const playerElement2 = document.querySelector('.player--1');
const scoreElement1 = document.getElementById('score--0');
const scoreElement2 = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const currentElement1 = document.querySelector('#current--0');
const currentElement2 = document.querySelector('#current--1');
const rollBtn = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

scoreElement1.textContent = 0;
scoreElement2.textContent = 0;
diceElement.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${playerNumber}`).textContent = 0;
  currentScore = 0;
  playerNumber = playerNumber === 0 ? 1 : 0;
  playerElement1.classList.toggle('player--active');
  playerElement2.classList.toggle('player--active');
};

const scores = [0, 0];
let currentScore = 0;
let playerNumber = 0;
let playing = true;

rollBtn.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    if (dice != 1) {
      currentScore += dice;
      document.getElementById(`current--${playerNumber}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[playerNumber] += currentScore;
    document.getElementById(`score--${playerNumber}`).textContent =
      scores[playerNumber];

    if (scores[playerNumber] >= 10) {
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${playerNumber}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${playerNumber}`)
        .classList.remove(`player--active`);
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  playerNumber = 0;
  playing = true;
  scoreElement1.textContent = 0;
  scoreElement2.textContent = 0;
  currentElement1.textContent = 0;
  currentElement2.textContent = 0;
  diceElement.classList.add('hidden');
  playerElement1.classList.add('player--active');
  document
    .querySelector(`.player--${playerNumber}`)
    .classList.remove(`player--winner`);
});
