const ComputerChoiceDisplay = document.getElementById('computer-choice');
const UserChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('button');
let userChoice;
let computerChoice;

choices.forEach(choice => choice.addEventListener('click', (event) => {
  userChoice = event.target.id;
  UserChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  ComputerChoiceDisplay.innerHTML = computerChoice;
}
