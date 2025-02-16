let rock = "rock";
let paper = "paper";
let scissors = "scissors";

/* step 1: getting the computer to choose */
function getComputerChoice() {
    let randNum = Math.random()
    if (randNum <= 0.33) {
        return rock;
    } else if (randNum > 0.67) {
        return scissors;
    } else {
        return paper;
    }
}

/* step 2: getting human to choose */
function getHumanChoice() {
    let userChoice = prompt("rock, paper scissors?");
    if (userChoice.toLowerCase() === rock || userChoice.toLowerCase() === scissors || userChoice.toLowerCase() === paper) {
        return userChoice.toLowerCase();
    } else {
        alert("Invalid choice. Please key in rock, paper or scissors");
        return false
    }
}

/* step 3: declaring score variables */
let humanScore = 0;
let computerScore = 0;

/* step 4: winning logic */
function playRound(humanChoice, computerChoice) {
    if (humanChoice === rock && computerChoice === scissors) {
        console.log("You win! Rock beats Scissors!");
        humanScore += 1;
    } else if (humanChoice === paper && computerChoice === rock) {
        console.log("You win! Paper beats Rock!");
        humanScore += 1;
    } else if (humanChoice === scissors && computerChoice === paper) {
        console.log("You win! Scissors beat Paper!");
        humanScore += 1;
    } else if (humanChoice === rock && computerChoice === paper){
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
    } else if (humanChoice === paper && computerChoice === scissors){
        console.log("You lose! Scissors beats Paper");
        computerScore += 1;
    } else if (humanChoice === scissors && computerChoice === rock){
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
    } else {
        console.log("It is a draw!")
    }
}

/* step 5: play the game based on number of rounds */
function playGame(rounds) {
    for (let i =1; i <= rounds; i++) {
        console.log("Round " + i)
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
}

let rounds = parseInt(prompt("How many rounds do you wish to play?"));
playGame(rounds);