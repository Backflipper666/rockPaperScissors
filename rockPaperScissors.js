//simple game
let choices = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * choices.length);
    let computerChoiceString = (choices[computerChoice])[0];
    return computerChoiceString;
}



function userPlay() {
    let userInput = prompt("(R) for Rock, (P) for paper and (S) for scissors" );
    return userInput.toUpperCase();
    
}


/* let userPlay = () => {
    return prompt("(R) for Rock, (P) for paper and (S) for scissors");
} */

let userTurn = userPlay();
let computerTurn = computerPlay();

function gameLogic() {
    //computer wins
    if (computerTurn == "R" && userTurn == "SCISSORS") {
        return console.log("Computer won, rock beats scissors");
    } 
    else if (computerTurn == "P" && userTurn == "ROCK") {
        return console.log("Computer won, paper beats rock");
    }
    else if (computerTurn == "S" && userTurn == "PAPER") {
        return console.log("Computer won, scissors beat paper");
    }

    //player wins
    else if (userTurn == "ROCK" && computerTurn == "S"){
        return console.log("User won! Rock beats scissors");
    }
    else if (userTurn == "PAPER" && computerTurn == "R"){
        return console.log("User won, paper beats rock");
    }
    else if (userTurn == "SCISSORS" && computerTurn == "P"){
        return console.log("User won, scissors beat paper");
    }

    //draw
    else if (userTurn == "ROCK" && computerTurn == "R"){
        return console.log("It's a draw, both chose Rock");
    }
    else if (userTurn == "PAPER" && computerTurn == "P"){
        return console.log("It's a draw, both chose Paper");
    }
    else if (userTurn == "SCISSORS" && computerTurn == "S"){
        return console.log("It's a draw, both chose Scissors");
    }
}
gameLogic();