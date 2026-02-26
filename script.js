

const choiceOptions = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let rounds = 0;
const buttonDiv = document.querySelector('.buttons');
const resultsDiv = document.querySelector('.results');

// Gets the computer's selection
function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random() * 3);
    const computerChoice = choiceOptions[choiceNumber];
    return computerChoice;
}

// Play a round
function playRound(humanChoice, computerChoice) {
    rounds +=1;
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') || 
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore += 1;
        resultsDiv.textContent = `You win! You chose ${humanChoice} and the computer chose ${computerChoice}.\nYou've completed ${rounds} round(s) and the score is: \nUser: ${humanScore}\nComputer: ${computerScore}`
    } else if (humanChoice === computerChoice) {
        resultsDiv.textContent = `You tied. You both chose ${humanChoice}. You've completed ${rounds} round(s) and the score is: \nUser: ${humanScore}\nComputer: ${computerScore}`
    } else  {
        computerScore += 1;
        resultsDiv.textContent = `You lose. You chose ${humanChoice} and the computer chose ${computerChoice}.\nYou've completed ${rounds} round(s) and the score is: \nUser: ${humanScore}\nComputer: ${computerScore}`
    }

    if (humanScore === 5 || computerScore === 5){
        let winner = "";
        if (humanScore === 5) {
            winner = "Human";
        } else {
            winner = "Computer"
        }
        
        resultsDiv.append(` Game over. The winner is ${winner}!`)
        buttonDiv.style.display = "none";
    }
}

buttonDiv.addEventListener("click", (e) => {
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice(); 
    playRound(humanChoice, computerChoice);
})
