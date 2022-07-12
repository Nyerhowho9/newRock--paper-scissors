function computerPlay(){
    let randomNum = Math.random();
    if (randomNum <=0.33){
        return "rock";
    }
    else if (randomNum >=0.66){
        return "paper";
    }
    else{
        return "scissors";

    }   
}

let playerScore = 0;
    let computerScore = 0;

//console.log(computerPlay());

function playRound(playerSelection, computerSelection){


    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "It's a tie";

        } else if(computerSelection == "paper"){
            computerScore++; 
            return "You lose! Paper beats rock. "


        } else{
            playerScore++;
            return "You win! Rock crushes scissors. "

        }

    } else if (playerSelection == "paper"){
        if(computerSelection == "rock"){
            playerScore++;
            return "You win! Paper beats rock. ";


        } else if (computerSelection == "paper"){
            return "It's a tie. "

        } else {
            computerScore++;
            return "You lose! Scissors shredddds Paper."

        }
    }else {
        if (computerSelection == "rock"){
            computerScore++;
            return "You lose! Rock crushes scissors."


        } else if(computerSelection == "paper"){
            playerScore++;
            return "You win! Scissors shredddds Paper.";


        } else{
            return "It's a tie. "
        }
    }

}





function game(){
    for (let i = 0; i < 5; i++) {
        // your code here!
         
        const playerSelection = "rock";
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your score is: " + playerScore);
        console.log("Computer's score is: " + computerScore);

     }
}
game();