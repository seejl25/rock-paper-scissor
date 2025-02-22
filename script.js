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
// function getHumanChoice() {
//     let userChoice = prompt("rock, paper scissors?");
//     if (userChoice.toLowerCase() === rock || userChoice.toLowerCase() === scissors || userChoice.toLowerCase() === paper) {
//         return userChoice.toLowerCase();
//     } else {
//         alert("Invalid choice. Please key in rock, paper or scissors");
//         return false
//     }
// }

/* step 3: declaring score variables */
let humanScore = 0;
let computerScore = 0;

/* step 4: winning logic */
function playRound(humanChoice, computerChoice) {
    if (humanChoice === rock && computerChoice === scissors) {
        para.textContent = "You win! Rock beats Scissors!";
        humanScore += 1;
    } else if (humanChoice === paper && computerChoice === rock) {
        para.textContent = "You win! Paper beats Rock!";
        humanScore += 1;
    } else if (humanChoice === scissors && computerChoice === paper) {
        para.textContent = "You win! Scissors beat Paper!";
        humanScore += 1;
    } else if (humanChoice === rock && computerChoice === paper){
        para.textContent ="You lose! Paper beats Rock";
        computerScore += 1;
    } else if (humanChoice === paper && computerChoice === scissors){
        para.textContent ="You lose! Scissors beats Paper";
        computerScore += 1;
    } else if (humanChoice === scissors && computerChoice === rock){
        para.textContent ="You lose! Rock beats Scissors";
        computerScore += 1;
    } else {
        para.textContent ="It is a draw!";
    }
    humanResults.textContent = `Your Score: ${humanScore}`;
    computerResults.textContent = `Computer Score: ${computerScore}`;
    if (humanScore === 5) {
        para.textContent = "Congratulations! You have won the game!";
    } else if (computerScore === 5) {
        para.textContent = "You lose! Better luck next time!";
    }
}

/* step 5: play the game based on number of rounds */
// function playGame(rounds) {
//     for (let i =1; i <= rounds; i++) {
//         console.log("Round " + i)
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//         console.log("Human score: " + humanScore);
//         console.log("Computer score: " + computerScore);
//     }
// }

// let rounds = parseInt(prompt("How many rounds do you wish to play?"));
// playGame(rounds);

const container = document.querySelector(".container");
const allResults = document.createElement("div")
const humanResults = document.createElement("div");
humanResults.classList.add("results");
const computerResults = document.createElement("div");
computerResults.classList.add("results");
const para = document.createElement("div");

allResults.appendChild(humanResults);
allResults.appendChild(computerResults);
container.appendChild(allResults);
container.appendChild(para);

allResults.style.width = "100%";
allResults.style.fontSize = "20px";
para.style.fontSize = "20px"
humanResults.style.cssFloat = "left";
computerResults.style.cssFloat = "right";

const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));

const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));

const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

