function game() {
    let round = 0;
    //loops for 5 rounds of rock, paper, scissors
    for (i=0; round < 5; i++) {
        let playerSelection = prompt("Choose between rock, paper or scissors");
        let computerSelection = getComputerChoice();
    
        function getComputerChoice() {
            let randomResult = Math.floor(Math.random() * 3);
            if (randomResult == 0) {
                return "Rock";
            } else if (randomResult == 1) {
                return "Paper";
            } else {
                return "Scissors";
            }
        }

        function playRound(playerSelection, computerSelection) {
        switch (true) {
                case (computerSelection === "Rock" && playerSelection === "paper"):
                case (computerSelection === "Rock" && playerSelection === "Paper"):
                case (computerSelection === "Rock" && playerSelection === "PAPER"):
                    return "Player Wins! Paper beats Rock.";
                case (computerSelection === "Rock" && playerSelection === "rock"):    
                case (computerSelection === "Rock" && playerSelection === "Rock"):
                case (computerSelection === "Rock" && playerSelection === "ROCK"):
                    return "It's a draw. We both picked Rock.";
                case (computerSelection === "Rock" && playerSelection === "scissors"):
                case (computerSelection === "Rock" && playerSelection === "Scissors"):
                case (computerSelection === "Rock" && playerSelection === "SCISSORS"):
                    return "Player loses. Rock beats Scissors.";

                case (computerSelection === "Paper" && playerSelection === "paper"):
                case (computerSelection === "Paper" && playerSelection === "Paper"):
                case (computerSelection === "Paper" && playerSelection === "PAPER"):
                    return "It's a draw. We both picked Paper.";
                case (computerSelection === "Paper" && playerSelection === "rock"):
                case (computerSelection === "Paper" && playerSelection === "Rock"):
                case (computerSelection === "Paper" && playerSelection === "ROCK"):
                    return "Player loses. Paper beats Rock.";
                case (computerSelection === "Paper" && playerSelection === "scissors"):
                case (computerSelection === "Paper" && playerSelection === "Scissors"):
                case (computerSelection === "Paper" && playerSelection === "SCISSORS"):
                    return "Player wins! Scissors beats Paper.";
                    
                case (computerSelection == "Scissors" && playerSelection === "paper"):
                case (computerSelection == "Scissors" && playerSelection === "Paper"):
                case (computerSelection == "Scissors" && playerSelection === "PAPER"):
                    return "Player loses. Scissors beats Paper.";
                case (computerSelection == "Scissors" && playerSelection === "rock"):
                case (computerSelection == "Scissors" && playerSelection === "Rock"):
                case (computerSelection == "Scissors" && playerSelection === "ROCK"):
                    return "Player wins! Rock beats Scissors.";
                case (computerSelection == "Scissors" && playerSelection === "scissors"):
                case (computerSelection == "Scissors" && playerSelection === "Scissors"):
                case (computerSelection == "Scissors" && playerSelection === "SCISSORS"):
                    return "It's a draw. We both picked Scissors.";    
                default:
                    return "You didn't enter a valid choice.";
            }    
        }
    round ++;
    console.log("Round " + round + ":");
    console.log("Player = " + playerSelection);
    console.log("Computer = " + computerSelection);
    console.log(playRound(playerSelection,computerSelection));
    }
}