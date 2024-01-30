'use strict';
const player = document.querySelectorAll('.player');
const currentScore = document.querySelectorAll('.current-score');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const diceImg = document.querySelector('.dice');
const score = document.querySelectorAll('.score');
let tmpScore = 0;
score[0].textContent = tmpScore;
score[1].textContent = tmpScore;

btnRollDice.addEventListener('click', function () {
  // Generate a random number between 1 and 6
  let randomNumber = Math.trunc(Math.random() * 6 + 1);

  // Display the dice image if it is hidden
  if (diceImg.style.visibility === 'hidden') {
    diceImg.style.visibility = '';
  }
  // Update the dice image source
  diceImg.src = `dice-${randomNumber}.png`;

  // Check the active player and update the current score accordingly
  if (player[0].classList.contains('player--active')) {
    if (randomNumber === 1) {
      // If the rolled number is 1, reset the current score and switch to the next player
      currentScore[0].textContent = 0;
      player[0].classList.remove('player--active');
      player[1].classList.add('player--active');

      // Reset the temporary score
      tmpScore = 0;
    } else {
      // Update the current score for player 1
      tmpScore = tmpScore + randomNumber;
      currentScore[0].textContent = tmpScore;
    }
  } else if (player[1].classList.contains('player--active')) {
    if (randomNumber === 1) {
      // If the rolled nubmer is 1, reset the current score and switch to the next player
      currentScore[1].textContent = 0;
      player[1].classList.remove('player--active');
      player[0].classList.add('player--active');

      // Reset the temporary score
      tmpScore = 0;
    } else {
      // Update the current score for player 2
      tmpScore = tmpScore + randomNumber;
      currentScore[1].textContent = tmpScore;
    }
  }
});

btnHold.addEventListener('click', function () {
  // Check the active player and update the total score accordingly
  if (player[0].classList.contains('player--active')) {
    // Add the current score to the total score for player 1
    score[0].textContent =
      Number(score[0].textContent) + Number(currentScore[0].textContent);

    // Reset the current score
    currentScore[0].textContent = 0;

    // Switch to the next player
    player[0].classList.remove('player--active');
    player[1].classList.add('player--active');

    // Reset the temporary score
    tmpScore = 0;
  } else if (player[1].classList.contains('player--active')) {
    // Add the current score to the total score for player 2
    score[1].textContent =
      Number(score[1].textContent) + Number(currentScore[1].textContent);

    // Reset the current score
    currentScore[1].textContent = 0;

    // Switch to the next player
    player[1].classList.remove('player--active');
    player[0].classList.add('player--active');

    // Reset the temporary score
    tmpScore = 0;
  }
});

btnNewGame.addEventListener('click', function () {
  // Reset total scores and the current
  score[0].textContent = 0;
  score[1].textContent = 0;
  currentScore[0].textContent = 0;
  currentScore[1].textContent = 0;

  // Reset the temporary score
  tmpScore = 0;

  // Hide the dice image
  diceImg.style.visibility = 'hidden';
});
