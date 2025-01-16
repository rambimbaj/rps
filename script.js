let humanScore = 0;
let computerScore = 0;
let computerChoice = null;
let humanChoice = null;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
  computerChoice = Math.round(Math.random() * 2) + 1;

  if (computerChoice === 1) {
    computerChoice = "rock";
  } else if (computerChoice === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log("comp: ",computerChoice);
  return;
}

function getHumanChoice() {
  humanChoice = prompt("Choose between rock, paper, scissors").toLowerCase();
  console.log("human: ",humanChoice);
}

function playRound() {
  if (humanChoice === computerChoice) {
    console.log("Tie");
  } else if {
    
  }
}

playRound(humanSelection, computerSelection);
