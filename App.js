const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");
const possibleChoices = document.querySelectorAll("button");
let userChoice
let computerChoice
let result

possibleChoices.forEach(btn => btn.addEventListener("click", (event) => {
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 //*3
    console.log(randomNumber, "watch it")
    if (randomNumber === 1) {
        computerChoice = "Rock"
    } else if (randomNumber === 2) {
        computerChoice = "scissors"
    } else
        computerChoice = "paper"
    computerChoiceDisplay.innerHTML = computerChoice
}

const getResult = () => {
    if (computerChoice === userChoice) {
        result = "it's a draw"
    } else if (computerChoice === "rock" && userChoice === "paper") {
        result = "you win!"
    } else if (computerChoice === "rock" && userChoice === "scissors") {
        result = "you lose!"
    } else if (computerChoice === "paper" && userChoice === "scissors") {
        result = "you win!"
    } else if (computerChoice === "paper" && userChoice === "rock") {
        result = "you lose!"
    } else if (computerChoice === "scissors" && userChoice === "rock") {
        result = "you win!"
    } else 
        result = "you lose!"
    resultDisplay.innerHTML = result
}