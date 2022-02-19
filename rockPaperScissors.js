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
let userWin;
let pcWin;
let draw;

function gameLogic() {
    //computer wins
    if (computerTurn == "R" && userTurn == "SCISSORS") {
        pcWin = true;
        return console.log("Computer won, rock beats scissors");
    } 
    else if (computerTurn == "P" && userTurn == "ROCK") {
        pcWin = true;
        return console.log("Computer won, paper beats rock");
    }
    else if (computerTurn == "S" && userTurn == "PAPER") {
        pcWin = true;
        return console.log("Computer won, scissors beat paper");
    }

    //player wins
    else if (userTurn == "ROCK" && computerTurn == "S"){
        userWin = true;
        return console.log("User won! Rock beats scissors");
    }
    else if (userTurn == "PAPER" && computerTurn == "R"){
        userWin = true;
        return console.log("User won, paper beats rock");
    }
    else if (userTurn == "SCISSORS" && computerTurn == "P"){
        userWin = true;
        return console.log("User won, scissors beat paper");
    }

    //draw
    else if (userTurn == "ROCK" && computerTurn == "R"){
        draw = true;
        return console.log("It's a draw, both chose Rock");
    }
    else if (userTurn == "PAPER" && computerTurn == "P"){
        draw = true;
        return console.log("It's a draw, both chose Paper");
    }
    else if (userTurn == "SCISSORS" && computerTurn == "S"){
        draw = true;
        return console.log("It's a draw, both chose Scissors");
    }
}



/* function game() {
    for (let i = 0; i < 5; i++){
        gameLogic();
        console.log(gameLogic());
        console.log(`The winner of round ${i} is: `);
    }
}
 */
//write a function which says who won, 
    //set a counter variable
    //if a pc won, increment pc's variable by 1
    //if a user wins, increment user's variable by 1
    //if it's a draw, increment draw's variable by 1
    //when 5 round is over, whoever has the highest number wins, draw not included when comparing. Comparing just pc and the user


/* function game() {
    let maxRounds = 5;
    let pc = 0;
    let user = 0;
    let draw = 0;
    for (let i = 0; i < 5; i++) {
        gameLogic();
        
    }
} */
function game() {
    let pc = 0;
    let user = 0;
    let drawLocal = 0;
    for (let i = 0; i < 5; i++){
        gameLogic()
        if (pcWin == true) pc++;
        else if (userWin == true) user ++;
        else if (draw == true) drawLocal ++;
    }
    console.log(`${pc}, ${user}, ${drawLocal}`);
}
game();