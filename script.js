let playerScore= 0;
let botScore =0;
function getComputerChoice() {
    let i = Math.random();
    switch (i) {
        case i<0.33:
            return "rock";
            break;
        case i<0.66:
            return "paper";
            break;
        default:
            return "scissors"; 
    }
}

function getUserChoice() {
    let choice = prompt("What is your choice? \nScissors - 'scissors' or 's', \nrock - 'rock' or 'r',\npaper - 'paper' or 'p'\n")
    switch(choice) {
        case "s":
        case "scissors":
            return "scissors";
            break;
        case "r":
        case "rock":
            return "rock";
            break;  
        case "p":
        case "paper":
            return "paper";
            break;  

    }
}

function getWinner(player,  bot) {
    if (bot === "rock") {
        switch (player) {
            case rock:
                return "Draw";
                break;
            case paper:
                return "Win";
                playerScore +=1;
                break;
            case scissors:
                return "Loss";
                botScore +=1;
                break;
        }
    }
    if (bot === "paper") {
        switch (player) {
            case rock:
                return "Loss";
                botScore+=1;
                break;
            case paper:
                return "Draw";
                break;
            case scissors:
                return "Win";
                playerScore +=1;
                break;
        }
    }
    if (bot === "scissors") {
        switch (player) {
            case rock:
                return "Loss";
                botScore +=1;
                break;
            case paper:
                return "Win";
                playerScore +=1;
                break;
            case scissors:
                return "Draw";
                break;
        }
    }

}

function runGame() {
    computer = getComputerChoice();
    player = getUserChoice();
    let result = getWinner();
    console.log(result);

}

for(i=0; i < 5; i++) {
    runGame();
}
if (playerScore > botScore) {
    console.log("Congratulation's you won with a score of " + toString(playerScore) + "-" +toString(botScore))
}
else {
    console.log("Unfortunately you lost with a score of " + toString(playerScore) + "-" +toString(botScore))
}