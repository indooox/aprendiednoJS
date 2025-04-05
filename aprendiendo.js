
const buttons = document.querySelectorAll("button");
const hPoints = document.querySelector(".hscore");
const cPoints = document.querySelector(".cscore");
const roundW = document.querySelector("#winner");

let humanScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener("click",(e) => {
        let eleccion = e.target.textContent.toLowerCase();
        playRound(eleccion);
    })
})


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

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    if (
        (humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        humanScore++;
        roundW.textContent = `You win this round, ${humanChoice} beats ${computerChoice}.`;
    } else if (humanChoice == computerChoice) {
        roundW.textContent = `No winner this round, both picked ${humanChoice}`
    } else {
        computerScore++;
        roundW.textContent = "Computer wins this round because " + computerChoice +  " wins to " + humanChoice;
    }

    hPoints.textContent = `Human = ${humanScore}`;
    cPoints.textContent = `Computer = ${computerScore}`;

    checkWinner();
}

function checkWinner() {
    if (humanScore == 5) {
        roundW.textContent = "You won the game!";
        buttons.forEach(button => {
            button.disabled = true;
        })
    } else if (computerScore == 5) {
        roundW.textContent = "Computer won the game!";
        buttons.forEach(button => {
            button.disabled = true;
        })  
    }
}