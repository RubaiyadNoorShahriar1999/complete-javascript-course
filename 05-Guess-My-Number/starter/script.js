'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let input;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  console.log(Number(document.querySelector('.guess').value));
  input = Number(document.querySelector('.guess').value);

  if (!input) {
    displayMessage('No number');
  } else if (input === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('div').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('div').textContent = secretNumber;
  } else if (input !== secretNumber) {
    displayMessage(input > secretNumber ? 'Too High' : 'Too Low');
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 0) {
      document.querySelector('.score').textContent = 0;
    }
  }

  if (score === 0) {
    displayMessage('You lost the game');
    document.querySelector('body').style.backgroundColor = '#ff0000';
    document.querySelector('div').textContent = secretNumber;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('div').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.highscore').textContent = highScore;
  score = 20;
});
