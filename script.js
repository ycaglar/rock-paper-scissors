function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randIndex = Math.floor(Math.random() * 2) + 1;
  return choices[randIndex];
};

function playRound(playerSelection) {
  let choices = { 'Rock': 0, 'Paper': 1, 'Scissors': 3 };
  playerSelection = prompt('Enter Your Choice:');
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

function playGame() {
  playerPoints = 0;
  computerPoints = 0;
  for (let i = 0; i < 5; i++) {
    result = playRound();
    playerPoints += result[1][0];
    computerPoints += result[1][1];
    console.log(result[0]);
  };

  if (playerPoints == computerPoints) {
    console.log('Tie!')
  } else if (playerPoints > computerPoints) {
    console.log('Player Wins!');
  } else {
    console.log('Computer Wins!');
  }
};

playGame();