function game() {
    let round = 0;

    //loops for 5 rounds of rock, paper, scissors
    for (i=0; round < 5; i++) {

    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Choose between rock, paper or scissors");
    
        function getComputerChoice() {
            let randomResult = Math.floor(Math.random() * 3);
            if (randomResult == 0) {
                return "Rock";
            }
            else if (randomResult == 1) {
                return "Paper";
            }
            else {
                return "Scissors";
            }
        }
            function playRound(playerSelection, computerSelection) {
                // need to fix logic
                if (computerSelection == "Rock" && playerSelection == "paper"
                    || computerSelection == "Rock" && playerSelection == "Paper"
                    || computerSelection == "Rock" && playerSelection == "PAPER") {
                    return "You Win! Paper beats Rock";
                }
                else if (computerSelection == "Paper" && playerSelection == "rock"
                || computerSelection == "Paper" && playerSelection == "Rock"
                || computerSelection == "Paper" && playerSelection == "ROCK") {
                    return "You Lose! Paper beats Rock";
                }
                else {
                    return "You win!"
                }

                /*
                //Could be easier to use a switch statement

                switch (computerSelection == "rock") {
                    case playerSelection = "paper":
                    case playerSelection = "Paper":
                    case playerSelection = "PAPER":
                        return "You win! Paper beats rock.";  
                        break;
                    case playerSelection = "rock":
                    case playerSelection = "Rock":
                    case playerSelection = "ROCK":
                        return "It's a tie. We both picked rock.";
                        break;
                    case playerSelection = "scissors":
                    case playerSelection = "Scissors":
                    case playerSelection = "SCISSORS":
                        return "You lose. Rock beats scissors";
                        break;
                
                    default:
                        return "test";
                        break;
                }
                */
            }
        round ++;
        console.log("Round " + round + ":");
        console.log(playRound(playerSelection,computerSelection));
        console.log("Computer = " + getComputerChoice());
        console.log("Player = " + playerSelection);
    }
}