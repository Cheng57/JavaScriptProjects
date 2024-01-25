'use strict';
// Produces an random integer between 1 and 20, min and max both inclueded
let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// When there is a click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (document.querySelector('.guess').value == '') {
    document.querySelector('.message').textContent = '⛔ No number!';

    // When player wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    score = Number(document.querySelector('.score').textContent);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        // Ternary operator combines guess > number and guess < number situations
        guess > number ? '📈 Too high' : '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lost the game!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

// Reset the game when there is a click on the "Again!" button
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
