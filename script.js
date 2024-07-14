var playerScore = 0;
var botScore = 0;

function getComputerChoice() {
    let i = Math.random();
    if (i < 0.33) {
        return "rock";
    } else if (i < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getUserChoice() {
    let choice = prompt("What is your choice? \nScissors - 'scissors' or 's', \nrock - 'rock' or 'r',\npaper - 'paper' or 'p'\n");
    switch (choice) {
        case "s":
        case "scissors":
            return "scissors";
        case "r":
        case "rock":
            return "rock";
        case "p":
        case "paper":
            return "paper";
        default:
            alert("Invalid choice, please try again.");
            return getUserChoice();
    }
}

function getWinner(player, bot) {
    if (bot === "rock") {
        switch (player) {
            case "rock":
                return "Draw";
            case "paper":
                playerScore += 1;
                return "Win";
            case "scissors":
                botScore += 1;
                return "Loss";
        }
    }
    if (bot === "paper") {
        switch (player) {
            case "rock":
                botScore += 1;
                return "Loss";
            case "paper":
                return "Draw";
            case "scissors":
                playerScore += 1;
                return "Win";
        }
    }
    if (bot === "scissors") {
        switch (player) {
            case "rock":
                playerScore += 1;
                return "Win";
            case "paper":
                botScore += 1;
                return "Loss";
            case "scissors":
                return "Draw";
        }
    }
}

function runGame() {
    const computer = getComputerChoice();
    const player = getUserChoice();
    const result = getWinner(player, computer);
    console.log(result);
}

window.onload = function() {
    for (let i = 0; i < 5; i++) {
        runGame();
    }
    if (playerScore > botScore) {
        console.log("Congratulations, you won with a score of " + playerScore + "-" + botScore);
    } else if (playerScore < botScore) {
        console.log("Unfortunately, you lost with a score of " + playerScore + "-" + botScore);
    } else {
        console.log("It's a draw with a score of " + playerScore + "-" + botScore);
    }
};
