'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  //no input!
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //player wins!
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = 'CORRECT! 👌';

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //guess is too big
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO HIGH! ☠';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST! ☠';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'purple';
    }

    //guess is too low
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO LOW! ☠';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST! ☠';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'purple';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = '  Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
