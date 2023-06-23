function getComputerChoice() {
    let randomResult = Math.floor(Math.random() * 3);
    let choice = "";
    if (randomResult == 0) {
        return choice = "rock";
    }
    else if (randomResult == 1) {
        return choice = "paper";
    }
    else {
        return choice = "scissors";
    }
}