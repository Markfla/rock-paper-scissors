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
                break;
            case scissors:
                return "Loss";
                break;
        }
    }
    if (bot === "paper") {
        switch (player) {
            case rock:
                return "Loss";
                break;
            case paper:
                return "Draw";
                break;
            case scissors:
                return "Win";
                break;
        }
    }
    if (bot === "scissors") {
        switch (player) {
            case rock:
                return "Loss";
                break;
            case paper:
                return "Win";
                break;
            case scissors:
                return "Draw";
                break;
        }
    }

}

function runGameEndless() {
    computer = getComputerChoice();
    player = getUserChoice();
    console.log(getWinner);
    //runGameEndless();
}

runGameEndless();