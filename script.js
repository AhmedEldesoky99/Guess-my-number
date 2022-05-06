'use strict';

let message = document.querySelector('.message');

let score = 10;
let highScore = 0;

let secretNum = Math.trunc(Math.random() * 20) + 1;

//event listener handle check button
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  //case number out of range or no number
  if (!guessNumber || guessNumber > 20 || guessNumber < 1) {
    message.textContent = 'Enter Number Between 1 and 20';
  } else if (guessNumber === secretNum) {
    message.textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber !== secretNum) {
    if (score > 1) {
      message.textContent = guessNumber > secretNum ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You Lost The Game ';
      document.querySelector('body').style.backgroundColor = '#F00';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNum;
    }
  }
});

//even listener handle again
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
});
