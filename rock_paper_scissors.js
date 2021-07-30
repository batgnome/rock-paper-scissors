function computerChoice() {
    choice = Math.floor(Math.random() * 3) + 1;
    switch(choice) {
        case 1:
            return "scissors";
            break;
        case 2:
            return "rock";
            break;
        case 3:
            return "paper";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    ps = playerSelection.toLowerCase();
    cs = computerSelection.toLowerCase();
    if(ps == cs) {
        return "it is a tie";
    }else if (ps == "rock") {
        if(cs == "paper") {
            return "Paper beats rock! You lose";
        }else {
            return "Hurray! You win!";
        }
    }else if (ps == "paper") {
        if(cs == "scissors") {
            return "Scissors beats paper! You lose!";
        }else {
            return "Hurray! You win!";switchCase
        }
    }
    else if (ps == "scissors") {
        if(cs == "rock") {
            return "Rock beats scissors! You lose!";
        }else {
            return "Hurray! You win!";
        }
    }

}

function game() {
    computer = computerChoice();
    player = window.prompt("enter your hand",)
    console.log(playRound(player, computer));
    alert(playRound(player, computer));
}

while(true) {
    game();
    if(window.prompt("do you wish to keep playing?(Y to play again)").toLowerCase()!="y") {
        break;
    }
}
