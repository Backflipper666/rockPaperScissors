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

let userTurn = userPlay();
let computerTurn = computerPlay();

function gameLogic() {
    //computer wins
    if (computerPlay() == "R" && userPlay() == "S") {
        return console.log("Computer won, rock beats scissors");
    } 
    else if (computerPlay() == "P" && userPlay() == "R") {
        return console.log("Computer won, paper beats rock");
    }
    else if (computerPlay() == "S" && userPlay() == "P") {
        return console.log("Computer won, scissors beat paper");
    }

    //player wins
    else if (userTurn == "R" && computerTurn == "S"){
        return console.log("User won! Rock beats scissors");
    }
    else if (userTurn == "P" && computerTurn == "R"){
        return console.log("User won, paper beats rock");
    }
    else if (userTurn == "S" && computerTurn == "P"){
        return console.log("User won, scissors beat paper");
    }

    //draw
    else if (userTurn == "R" && computerTurn == "R"){
        return console.log("It's a draw, both chose Rock");
    }
    else if (userTurn == "P" && computerTurn == "P"){
        return console.log("It's a draw, both chose Paper");
    }
    else if (userTurn == "S" && computerTurn == "S"){
        return console.log("It's a draw, both chose Scissors");
    }
}
gameLogic();