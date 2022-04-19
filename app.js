const ComputerChoiceDisplay = document.getElementById('computer-choice');
const UserChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('button');
let userChoice;

choices.forEach(choice => choice.addEventListener('click', (event) => {
  userChoice = event.target.id;
  UserChoiceDisplay.innerHTML = userChoice;
}))
