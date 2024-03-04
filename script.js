// Allows computer to choose R,P, or S
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch(computerChoice) {
        case 0:
            computerChoice = 'rock';
            break;
        
        case 1:
            computerChoice = 'paper';
            break;

        case 2:
            computerChoice = 'scissors';
            break;
    }
    return computerChoice;
}

// Plays the game
function playGame() {
    // Creates a reference to user choices
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');

    // plays a round and determines winner
    function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It is a tie!';
    }

    if (playerSelection==='rock' && computerSelection==='scissors' || playerSelection==='scissors' && computerSelection==='paper' || playerSelection==='paper' && computerSelection==='rock') {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    };
}
// Gets choice from user and computer
const playerSelection = prompt('Rock, Paper, Scissors!').toLowerCase();
const computerSelection = getComputerChoice();
alert(playRound(playerSelection, computerSelection));
}

// plays 5 rounds
for (let round = 1; round <= 5; round++) {
    playGame();
}