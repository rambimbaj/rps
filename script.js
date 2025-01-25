function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let humanChoice = null;
  let computerChoice = null;
  function getComputerChoice() {
    computerChoice = Math.round(Math.random() * 2) + 1;
    if (computerChoice === 1) {
      computerChoice = "rock";
    } else if (computerChoice === 2) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
    return;
  }
  let rockBtn = document.querySelector(".rock");
  rockBtn.addEventListener("click", () => {
    humanChoice = "rock";
    getComputerChoice();
    let roundChoice = document.querySelector(".roundChoice");
    roundChoice.textContent = `${humanChoice} VS ${computerChoice}`;
    playRound();
  });
  let paperBtn = document.querySelector(".paper");
  paperBtn.addEventListener("click", () => {
    humanChoice = "paper";
    getComputerChoice();
    let roundChoice = document.querySelector(".roundChoice");
    roundChoice.textContent = `${humanChoice} VS ${computerChoice}`;
    playRound();
  });
  let scissorsBtn = document.querySelector(".scissors");
  scissorsBtn.addEventListener("click", () => {
    humanChoice = "scissors";
    getComputerChoice();
    let roundChoice = document.querySelector(".roundChoice");
    roundChoice.textContent = `${humanChoice} VS ${computerChoice}`;
    playRound();
  });
  function playRound() {
    if (humanChoice === computerChoice) {
      let roundResult = document.querySelector(".roundResult");
      roundResult.textContent = "Tie!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      roundResult = document.querySelector(".roundResult");
      roundResult.textContent = "Round won!";
      humanScore += 1;
      let roundScore = document.querySelector(".roundScore");
      roundScore.textContent = `Current score: ${humanScore} ~ ${computerScore}`;
    } else {
      roundResult = document.querySelector(".roundResult");
      roundResult.textContent = "Round lost!";
      computerScore += 1;
      let roundScore = document.querySelector(".roundScore");
      roundScore.textContent = `Current score: ${humanScore} ~ ${computerScore}`;
    }
    if (humanScore === 5) {
      resetGame();
      roundResult.textContent = "YOU'VE WON THE MATCH";
    } else if (computerScore === 5) {
      resetGame();
      roundResult.textContent = "YOU'VE LOST THE MATCH";
    }
    function resetGame() {
      humanScore = 0;
      computerScore = 0;
    }
  }
}
playGame();
