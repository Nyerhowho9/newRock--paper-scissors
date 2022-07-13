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
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultContainer = document.querySelector('#resultContainer');
const chart= document.querySelector('#winningChart')
const reset = document.querySelector('#reset');


//console.log(computerPlay());
//const computerSelection = computerPlay();
function resetScores(){
    playerScore = 0;
    computerScore = 0;
    resultContainer.textContent = '';
    chart.textContent = "Let's play another round";
}
function playRound(playerSelection, computerSelection){

    if(playerScore === 5 || computerScore ===5) return


    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            const p = document.createElement('p');
            p.textContent ="It's a tie";
            resultContainer.appendChild(p)
            

        } else if(computerSelection == "paper"){

            computerScore+=1
            const p = document.createElement('p');
            p.textContent = "You lose! Paper beats rock. "
            resultContainer.appendChild(p)
            
        } else{
            playerScore+=1
            const p = document.createElement('p');
            p.textContent ="You win! Rock crushes scissors. "
            resultContainer.appendChild(p)

        }

    } else if (playerSelection == "paper"){
        if(computerSelection == "rock"){

            playerScore++
            const p = document.createElement('p');
            p.textContent = "You win! Paper beats rock. ";
            resultContainer.appendChild(p)


        } else if (computerSelection == "paper"){
            const p = document.createElement('p');
            p.textContent = "It's a tie. "
            resultContainer.appendChild(p)
        } else {

            computerScore++
            const p = document.createElement('p');
            p.textContent = "You lose! Scissors shredddds Paper."
            resultContainer.appendChild(p)

        }
    }else {
        if (computerSelection == "rock"){
            computerScore++;

            const p = document.createElement('p');
            p.textContent = "You lose! Rock crushes scissors."
            resultContainer.appendChild(p)

        } else if(computerSelection == "paper"){
            playerScore++
            const p = document.createElement('p');
            p.textContent = "You win! Scissors shredddds Paper.";
            resultContainer.appendChild(p)


        } else{
            const p = document.createElement('p');
            p.textContent = "It's a tie. "
            resultContainer.appendChild(p)
        }
    }

   // updateResult(playerScore, computerScore)

}

// function updateResult(playerScore, computerScore){
//     const result = document.querySelector('#result');
//     result.textContent = `Your score is: ${playerScore}.\n Computer's score is: ${computerScore}`;
//     resultContainer.appendChild(result)
// }

function checkForWinner(playerScore, computerScore){
    if (playerScore === 5){
        chart.textContent = `You won ${playerScore} to ${computerScore}. Great job!!`
    }else if(computerScore === 5 ){
        chart.textContent = `You lost ${computerScore} to ${playerScore}. Too bad!!`
    }else if(computerScore<5 && computerScore >playerScore){
        chart.textContent = ` ${playerScore} to ${computerScore} | Computer is winning!!! `
    }else if (playerScore<5 && playerScore > computerScore){
        chart.textContent = ` ${playerScore} to ${computerScore} | You are winning!!! `
    }else{
        chart.textContent = `It's a tie. ${playerScore} to ${computerScore} | It's a tie!!! `   
    }
}
        rock.addEventListener('click', () =>{
            ( playRound("rock", computerPlay()))
            checkForWinner(playerScore, computerScore)
        })

        
        paper.addEventListener('click', () =>{
            (playRound("paper", computerPlay()))
            checkForWinner(playerScore, computerScore)
        })

        
        scissors.addEventListener('click', ()=>{
            (playRound("scissors", computerPlay()))
            checkForWinner(playerScore, computerScore)
        })

       
        reset.addEventListener('click', resetScores)
// updateResult(playerScore, computerScore)

//function game(){
    //for (let i = 0; i <= 5; i++) {
        // your code here!

        //const playerSelection = "rock";
        //const computerSelection = computerPlay();
        //console.log(playRound(playerSelection, computerSelection));

        
   // }
//}
//game();

