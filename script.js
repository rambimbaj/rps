function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let humanChoice = null;
  let computerChoice = null;
  function playRound() {
    function getComputerChoice() {
      computerChoice = Math.round(Math.random() * 2) + 1;
      if (computerChoice === 1) {
        computerChoice = "rock";
      } else if (computerChoice === 2) {
        computerChoice = "paper";
      } else {
        computerChoice = "scissors";
      }
      console.log("comp: ", computerChoice);
      return;
    }
    function getHumanChoice() {
      humanChoice = prompt(
        "Choose between rock, paper, scissors"
      ).toLowerCase();
      console.log("human: ", humanChoice);
      return;
    }
    getHumanChoice();
    getComputerChoice();
    if (humanChoice === computerChoice) {
      console.log("Tie");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("Win");
      humanScore += 1;
    } else {
      console.log("Lose");
      computerScore += 1;
    }
  }
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  if (humanScore > computerScore) {
    console.log("Winner!");
  } else if ((humanScore = computerScore)) {
    console.log("Tier!");
  } else {
    console.log("Loser!");
  }
  console.log("Human:", humanScore, "Computer:", computerScore);
}
playGame();
