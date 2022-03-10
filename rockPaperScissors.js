//greet the user, instruct to choose from 3 buttons
//when the user presses the button, generate a random choice with computer, compare computer choice with user choice
//play 5 rounds

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


let userWin;
let pcWin;
let draw;

function gameLogic() {

    let userTurn = userPlay();
    let computerTurn = computerPlay();

    //computer wins
    if (computerTurn == "R" && userTurn == "SCISSORS") {
        console.log("Computer won, rock beats scissors");
        userWin = false;
        draw = false;
        return pcWin = true;
        
    } 
    else if (computerTurn == "P" && userTurn == "ROCK") {
        console.log("Computer won, paper beats rock");
        userWin = false;
        draw = false;
        return pcWin = true;
        
    }
    else if (computerTurn == "S" && userTurn == "PAPER") {
        console.log("Computer won, scissors beat paper");
        userWin = false;
        draw = false;
        return pcWin = true;
        
    }

    //player wins
    else if (userTurn == "ROCK" && computerTurn == "S"){
        console.log("User won! Rock beats scissors");
        pcWin = false;
        draw = false;
        return userWin = true;
        
    }
    else if (userTurn == "PAPER" && computerTurn == "R"){
        console.log("User won, paper beats rock");
        pcWin = false;
        draw = false;
        return userWin = true;
        
    }
    else if (userTurn == "SCISSORS" && computerTurn == "P"){
        console.log("User won, scissors beat paper");
        pcWin = false;
        draw = false;
        return userWin = true;
       
    }

    //draw
    else if (userTurn == "ROCK" && computerTurn == "R"){
        console.log("It's a draw, both chose Rock");
        pcWin = false;
        userWin = false;
        return draw = true;
        
    }
    else if (userTurn == "PAPER" && computerTurn == "P"){
        console.log("It's a draw, both chose Paper");
        pcWin = false;
        userWin = false;
        return draw = true;
        
    }
    else if (userTurn == "SCISSORS" && computerTurn == "S"){
        console.log("It's a draw, both chose Scissors");
        pcWin = false;
        userWin = false;
        return draw = true;
        
    }
    else{
        console.log("Type \"rock\", \"paper\", or \"scissors\"");
    }
}


function game() {
    let pc = 0;
    let user = 0;
    let drawLocal = 0;
    for (let i = 0; i < 5; i++){
        gameLogic()
        if (pcWin == true) pc++;
        else if (userWin == true) user ++;
        else if (draw == true) drawLocal ++;
        console.log(`${pc}, ${user}, ${drawLocal}`);
    }
    if (pc > user || pc > drawLocal) {
        console.log("PC won the 5 round match")
    }
    else if (user > pc || user > drawLocal) {
        console.log("User won the 5 round match")
    }
    else if (draw > pc && draw > user) {
        console.log("It's a draw, congrats to both"); 
    }
    else if (pc == user) {
        console.log("It's a draw");
    }
    //console.log(`${pc}, ${user}, ${drawLocal}`);
}
gameLogic();

let div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'display: flex; align-content: space-between; justify-content: center;column-gap: 15px; color: yellow; background-color: #0e1400; padding: 20px;');

const rock = document.createElement('button');
rock.textContent = "Rock";
rock.id = 'rockId';

//rock.setAttribute("style", "padding: 5px;")
rock.setAttribute('style', 'border-radius: 10px; padding: 5px; background-color: #7fcdff; font-family: helvetica;')
div.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = "Paper";
paper.id = 'paperId';
paper.setAttribute('style', 'border-radius: 10px; padding: 5px; background-color: #c7e67f; font-family: helvetica;')
div.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = "Scissors";
scissors.id = 'ScissorsId';
scissors.setAttribute('style', 'border-radius: 10px; padding: 5px; background-color: pink; font-family: helvetica;')
div.appendChild(scissors);

let buttonAll = document.querySelectorAll('button');




