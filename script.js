function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
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

function playGame() {
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    const resultDisplay = document.querySelector('p');

    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    function displayResult(result) {
        resultDisplay.textContent = result;
    }

    function showScore(playerScore, computerScore) {
        resultDisplay.textContent = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return 'It is a tie!';
        }

        if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')
        ) {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        } else {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
    }

    function handleButtonClick(playerSelection) {
        round++;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        displayResult(result);

        if (round === 5) {
            // Call showScore after five rounds
            showScore(playerScore, computerScore);
        }
    }

    rock.addEventListener('click', () => handleButtonClick('rock'));
    paper.addEventListener('click', () => handleButtonClick('paper'));
    scissors.addEventListener('click', () => handleButtonClick('scissors'));
}

playGame();
