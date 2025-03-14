function getComputerChoice(){
    let number = Math.random()

    if (number < 0.33) {
        return "rock"
    } else if (number < 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let eleccionHumano = prompt("Chose rock, paper or scissors").toLowerCase()
    return eleccionHumano
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (
        (humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        humanScore++
        console.log("You win this round bacause " + humanChoice + " wins to " + computerChoice)
    } else if (humanChoice == computerChoice) {
        console.log("No winner this round, both picked " + humanChoice)
    } else {
        computerScore++
        console.log("Computer wins this round because " + computerChoice +  " wins to " + humanChoice)
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        console.log("score is You: " + humanScore + " - " + computerScore + ":Computer")
        }
}

playGame();