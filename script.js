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
    const resultDisplay = document.querySelector('p');

    // Changes paragraph to results
    function displayResult(result) {
        resultDisplay.textContent = result;
    }
    

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
rock.addEventListener('click', function() {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    displayResult(result);
})

paper.addEventListener('click', function() {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    displayResult(result);
})

scissors.addEventListener('click', function() {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    displayResult(result);
})


}
playGame();