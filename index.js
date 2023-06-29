//function game() {
    let currentRound = 0;
    let computerScoreCounter = 0;
    let playerScoreCounter = 0;

    const container = document.querySelector(".container");
    const gameOutput = document.createElement("div");
    gameOutput.classList.add("gameOutputContainer");
    container.appendChild(gameOutput);

    //rounds
    const rounds = document.createElement("div");
    rounds.classList.add("rounds")
    rounds.textContent = "Round: " +  currentRound;
    gameOutput.appendChild(rounds);

    const scoreContainer = document.createElement("div");
    scoreContainer.classList.add("scoreContainer");
    gameOutput.appendChild(scoreContainer)

    //computer score
    const computerScore = document.createElement("div");
    computerScore.textContent = "Computer: " + computerScoreCounter;
    scoreContainer.appendChild(computerScore);

    //player score
    const playerScore = document.createElement("div");
    playerScore.textContent = "Player: " + playerScoreCounter;
    scoreContainer.appendChild(playerScore);

    //loops for 5 rounds of rock, paper, scissors
    for (i=0; currentRound < 5; i++) {
        let playerSelection = "";
        //document.addEventListener("click", playerSelection).textContent = "rock";
        let computerSelection = getComputerChoice();
    
        function getComputerChoice() {
            let randomResult = Math.floor(Math.random() * 3);
            if (randomResult == 0) {
                return "rock";
            } else if (randomResult == 1) {
                return "paper";
            } else {
                return "scissors";
            }
        }

        function playRound(playerSelection, computerSelection) {
        switch (true) {
                case (computerSelection === "rock" && playerSelection === "paper"):
                    return "Player Wins! Paper beats Rock.";
                case (computerSelection === "rock" && playerSelection === "scissors"):
                    return "Player loses. Rock beats Scissors.";
                case (computerSelection === "paper" && playerSelection === "rock"):
                    return "Player loses. Paper beats Rock.";
                case (computerSelection === "paper" && playerSelection === "scissors"):
                    return "Player wins! Scissors beats Paper.";
                case (computerSelection == "scissors" && playerSelection === "paper"):
                    return "Player loses. Scissors beats Paper.";
                case (computerSelection == "scissors" && playerSelection === "rock"):
                    return "Player wins! Rock beats Scissors.";
                case (computerSelection === playerSelection):
                    return "It's a tie.";
            }    
        }

    currentRound ++;
    console.log("Player = " + playerSelection);
    console.log("Computer = " + computerSelection);
    console.log(playRound(playerSelection,computerSelection));
    }
//}