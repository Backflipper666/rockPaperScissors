let div = document.createElement('div');
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
let beautifyButtons = function() {

    
    document.body.appendChild(div);
    div.setAttribute('style', 'display: flex; align-content: space-between; justify-content: center;column-gap: 15px; color: yellow; background-color: #0e1400; padding: 20px;');

    
    rock.textContent = "Rock";
    rock.id = 'rockId';

    //rock.setAttribute("style", "padding: 5px;")
    rock.setAttribute('style', 'border-radius: 10px; padding: 5px; background-color: #7fcdff; font-family: helvetica;')
    div.appendChild(rock);

    
    paper.textContent = "Paper";
    paper.id = 'paperId';
    paper.setAttribute('style', 'border-radius: 10px; padding: 5px; background-color: #c7e67f; font-family: helvetica;')
    div.appendChild(paper);

    
    scissors.textContent = "Scissors";
    scissors.id = 'ScissorsId';
    scissors.setAttribute('style', 'border-radius: 10px; padding: 5px; background-color: pink; font-family: helvetica;')
    div.appendChild(scissors);

    
}
beautifyButtons();
//assign to each button an event listener of the userPlay(), eg that when clicked rock, return value of the function is ROCK  

let choices = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * choices.length);
    let computerChoiceString = (choices[computerChoice])[0];
    return computerChoiceString;
}


let userWin;
let pcWin;
let draw;

let playerScore = 0;
let computerScore = 0;




function playRoundTogether() {
    rock.addEventListener("click",  (e) => {
        
        let userTurn = "ROCK";
        let computerTurn = computerPlay();
        
        if (computerTurn == "P" && userTurn == "ROCK") {
        
            console.log("Computer won, paper beats rock");
            userWin = false;
            draw = false;
            computerScore += 1;
            

        }
        else if (userTurn == "ROCK" && computerTurn == "S"){
            console.log("User won! Rock beats scissors");
            pcWin = false;
            draw = false;
            playerScore += 1;
            return userWin = true;
        }
        else if (userTurn == "ROCK" && computerTurn == "R"){
            console.log("It's a draw, both chose Rock");
            pcWin = false;
            userWin = false;
            return draw = true;
        }
        

    });
    paper.addEventListener("click", (e) => {
        let userTurn = "PAPER";
        let computerTurn = computerPlay();
        if (computerTurn == "S" && userTurn == "PAPER") {
            console.log("Computer won, scissors beat paper");
            userWin = false;
            draw = false;
            computerScore += 1;
            
            
        }
        else if (userTurn == "PAPER" && computerTurn == "R"){
            console.log("User won, paper beats rock");
            pcWin = false;
            draw = false;
            playerScore += 1;
            
            
        }
        else if (userTurn == "PAPER" && computerTurn == "P"){
            console.log("It's a draw, both chose Paper");
            pcWin = false;
            userWin = false;
            
            
        }
    });
    scissors.addEventListener("click", (e) => {
        let userTurn = "SCISSORS";
        let computerTurn = computerPlay();
        
        if (computerTurn == "R" && userTurn == "SCISSORS") {
            console.log("Computer won, rock beats scissors");
            userWin = false;
            draw = false;
            computerScore += 1;
            
            
        } 
        else if (userTurn == "SCISSORS" && computerTurn == "P"){
            console.log("User won, scissors beat paper");
            pcWin = false;
            draw = false;
            playerScore += 1;
            
           
        }
        else if (userTurn == "SCISSORS" && computerTurn == "S"){
            console.log("It's a draw, both chose Scissors");
            pcWin = false;
            userWin = false;
           
            
        }


        scoreCount();
        
    });
}


playRoundTogether();
function scoreCount() {
    if (playerScore === 5) {
        console.log("Player won the match!")
    }
    else if (computerScore === 5) {
        console.log("Computer won the match");
    }
}


function playRoundRock() {
    confirm("Do you choose Rock?");
    let userTurn = "ROCK";
    let computerTurn = computerPlay();
    if (computerTurn == "P" && userTurn == "ROCK") {
        
        console.log("Computer won, paper beats rock");
        userWin = false;
        draw = false;
        return pcWin = true;
    }
    else if (userTurn == "ROCK" && computerTurn == "S"){
        console.log("User won! Rock beats scissors");
        pcWin = false;
        draw = false;
        return userWin = true;
    }
    else if (userTurn == "ROCK" && computerTurn == "R"){
        console.log("It's a draw, both chose Rock");
        pcWin = false;
        userWin = false;
        return draw = true;
    }
}

function playRoundPaper() {
    let userTurn = "PAPER";
    let computerTurn = computerPlay();
    if (computerTurn == "S" && userTurn == "PAPER") {
        console.log("Computer won, scissors beat paper");
        userWin = false;
        draw = false;
        return pcWin = true;
        
    }
    else if (userTurn == "PAPER" && computerTurn == "R"){
        console.log("User won, paper beats rock");
        pcWin = false;
        draw = false;
        return userWin = true;
        
    }
    else if (userTurn == "PAPER" && computerTurn == "P"){
        console.log("It's a draw, both chose Paper");
        pcWin = false;
        userWin = false;
        return draw = true;
        
    }
}

function playRoundScissors() {
    let userTurn = "SCISSORS";
    let computerTurn = computerPlay();
    if (computerTurn == "R" && userTurn == "SCISSORS") {
        console.log("Computer won, rock beats scissors");
        userWin = false;
        draw = false;
        return pcWin = true;
        
    } 
    else if (userTurn == "SCISSORS" && computerTurn == "P"){
        console.log("User won, scissors beat paper");
        pcWin = false;
        draw = false;
        return userWin = true;
       
    }
    else if (userTurn == "SCISSORS" && computerTurn == "S"){
        console.log("It's a draw, both chose Scissors");
        pcWin = false;
        userWin = false;
        return draw = true;
        
    }
}


