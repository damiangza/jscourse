var scores, roundScore, previousScore, activePlayer, winningScore, gamePlaying;

init();

document.querySelector('.btn-winningscore').addEventListener('click', function () {
  winningScore = prompt('Enter winning score');
  document.querySelector('.btn-winningscore').textContent = winningScore;
  document.querySelector('.btn-winningscore').textContent = 'TARGET SCORE: '+ winningScore;
});

// document.querySelector('.btn-winningscore').addEventListener('click', function () {
//   document.querySelector('#winning-score-input').style.display = 'block';
//   document.querySelector('.btn-winningscore').addEventListener('click', function () {
//     winningScore = document.getElementById('winning-score-input').value;
//   });
// });


document.querySelector('.btn-roll').addEventListener('click', function () {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6 + 1);
    var diceDOM = document.querySelector('.dice');
    previousScore = dice;

    diceDOM.style.display = 'block';
    diceDOM.src = "dice-" + dice + '.png';
    if (dice !== 1) {
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else if (dice === 6 && previousScore === 6) {
      score[activePlayer] = 0;
      nextPlayer();
    } else {
      nextPlayer();
    }
  }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gamePlaying) {
    // add current score to player global score
    scores[activePlayer] += roundScore;
    // update UI with score
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('.winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('.active');
      document.querySelector('.btn-roll').style.display = 'none';
      document.querySelector('.btn-hold').style.display = 'none';
      winningScore = 0;
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}

// start a new game
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  previousScore = 0;
  winningScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.btn-roll').style.display = 'block';
  document.querySelector('.btn-hold').style.display = 'block';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.btn-winningscore').textContent = 'SET SCORE';
  document.querySelector('.btn-winningscore').style.display = 'hidden';

}


// function myFunction() {
//   var x = document.getElementById("myText").value;
//   document.getElementById("demo").innerHTML = x;
// }

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/