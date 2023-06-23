function getComputerChoice() {
    let randomResult = Math.floor(Math.random() * 3);
    if (randomResult == 0) {
        return "rock";
    }
    else if (randomResult == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "paper" && playerSelection == "rock"
        || computerSelection == "Paper" && playerSelection == "rock"
        || computerSelection == "PAPER" && playerSelection == "rock") {
          return "You Lose! Paper beats Rock";
    }
}