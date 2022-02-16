//simple game
let choices = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * choices.length);
    let computerChoiceString = (choices[computerChoice])[0];
    return computerChoiceString;
}



function userPlay() {
    let userInput = prompt("(R) for Rock, (P) for paper and (S) for scissors" ).toUpperCase();
    return userInput;
    
}



function gameLogic() {
    //computer wins
    if (computerPlay() == "R" && userPlay() == "S") {
        console.log("Computer won");
    } 
    else if (computerPlay() == "P" && userPlay() == "R") {
        console.log("Computer won");
    }
    else if (computerPlay() == "S" && userPlay() == "P") {
        console.log("Computer won");
    }
}
console.log(computerPlay());
/* gameLogic();
console.log(computerPlay());
console.log(userPlay()); */