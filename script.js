function getComputerChoice (){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getHumanChoice (){
  let choice = prompt("Type rock, paper, or scissors");
   choice = choice.toLowerCase();
  return choice;
  
}


function playGame (){
    function playRound(humanChoice, computerChoice) {
      // normalize and compare choices
      humanChoice = humanChoice.toLowerCase();
      if (humanChoice === computerChoice) return "draw";
      if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) 
        return "human wins";
      return "computer wins";
    }
   
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      const result = playRound(humanChoice, computerChoice);
      if (result === "human wins") {
        humanScore++;
        alert(`Round ${round}: You win! ${humanChoice} beats ${computerChoice}.`);
      } else if (result === "computer wins") {
        computerScore++;
        alert(`Round ${round}: You lose! ${computerChoice} beats ${humanChoice}.`);
      } else {
        alert(`Round ${round}: It's a draw! You both chose ${humanChoice}.`);
      }
    }

    alert(`Final Score:\nYou: ${humanScore}\nComputer: ${computerScore}`);
}

 