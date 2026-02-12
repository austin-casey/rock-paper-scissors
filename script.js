
//***** Pseudocode
// 1. Ask the user to choose rock, paper, or scissors
// 2. Randomly choose a seelction for the computer
// 3. Evaluate the choices against each other to see who wins
// 4. Keep track of the score over 5 rounds.  */

const choiceOptions = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random() * 3);
    const choice = (choiceOptions[choiceNumber]);
    return choice;
}

console.log(getComputerChoice())