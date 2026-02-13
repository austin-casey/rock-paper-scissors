
//***** Pseudocode
// 1. Ask the user to choose rock, paper, or scissors
// 2. Randomly choose a selection for the computer
// 3. Evaluate the choices against each other to see who wins
// 4. Keep track of the score over 5 rounds.  */

const choiceOptions = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let rounds = 0;

// Gets the user's selection
function getHumanChoice() {
    const humanChoice = prompt('Choose rock, paper, or scissors.');
    return humanChoice.toLowerCase();
}
// Gets the computer's selection
function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random() * 3);
    const computerChoice = choiceOptions[choiceNumber];
    return computerChoice;
}

// Play a round
function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') || 
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore += 1;
        console.log(`You win! You chose ${humanChoice} and the computer chose ${computerChoice}.\nYou've completed ${rounds} round(s) and the score is: \nUser: ${humanScore}\nComputer: ${computerScore}`)
    } else if (humanChoice === computerChoice) {
        console.log(`You tied. You both chose ${humanChoice}. You've completed ${rounds} round(s) and the score is: \nUser: ${humanScore}\nComputer: ${computerScore}`)
    } else  {
        computerScore += 1;
        console.log(`You lose. You chose ${humanChoice} and the computer chose ${computerChoice}.\nYou've completed ${rounds} round(s) and the score is: \nUser: ${humanScore}\nComputer: ${computerScore}`)
    }
}

// Play a game 
function playGame() {
    while (rounds < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        rounds += 1;
        playRound(humanSelection, computerSelection);
    }
}

playGame();