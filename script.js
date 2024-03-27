function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randIndex = Math.floor(Math.random() * 3);
  return choices[randIndex];
};

function playRound(playerSelection) {
  // let choices = { 'Rock': 0, 'Paper': 1, 'Scissors': 3 };
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  computerSelection = getComputerChoice();

  if (playerSelection == computerSelection) {
    return [`Tie!`, [0, 0]];
  }
  if (playerSelection == 'Rock' && computerSelection == 'Paper') {
    return [`You Lose! ${computerSelection} beats ${playerSelection}`, [0, 1]];
  }
  if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    return [`You Win! ${playerSelection} beats ${computerSelection}`, [1, 0]];
  }
  if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
    return [`You Win! ${playerSelection} beats ${computerSelection}`, [1, 0]];
  }
  if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
    return [`You Lose! ${computerSelection} beats ${playerSelection}`, [0, 1]];
  }
  if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
    return [`You Lose! ${computerSelection} beats ${playerSelection}`, [0, 1]];
  }
  if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    return [`You Win! ${playerSelection} beats ${computerSelection}`, [1, 0]];
  };
};

// function playGame() {
//   playerPoints = 0;
//   computerPoints = 0;
//   for (let i = 0; i < 5; i++) {
//     result = playRound();
//     playerPoints += result[1][0];
//     computerPoints += result[1][1];
//     console.log(result[0]);
//   };

//   if (playerPoints == computerPoints) {
//     console.log('Tie!')
//   } else if (playerPoints > computerPoints) {
//     console.log('Player Wins!');
//   } else {
//     console.log('Computer Wins!');
//   }
// };

// playGame();

let round_count_display = document.querySelector('.round');
let player_score_display = document.querySelector('.player-score');
let computer_score_display = document.querySelector('.computer-score');
let winner_display = document.querySelector('.winner');

let buttons_container = document.querySelector('.buttons');

round_count = 0
player_score = 0
computer_score = 0

buttons_container.addEventListener('click', (event) => {
  let target = event.target;

  if (player_score < 5 && computer_score < 5) {
    switch (target.className) {
      case 'rock':
        playerSelection = 'rock';
        break;
      case 'paper':
        playerSelection = 'paper';
        break;
      case 'scissors':
        playerSelection = 'scissors';
        break;
    };
    result = playRound(playerSelection);
    console.log(result[0]);
    round_count += 1;
    player_score += Number(result[1][0]);
    computer_score += Number(result[1][1]);
    round_count_display.textContent = round_count;
    player_score_display.textContent = player_score;
    computer_score_display.textContent = computer_score;
  } else {
    winner = '';
    if (player_score == computer_score) {
      winner = 'Tie!';
    } else if (player_score > computer_score) {
      winner = 'Player';
    } else {
      winner = 'Computer';
    }
    winner_display.textContent = winner;
  };
});