let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {

    const computerChoice =
        choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = `It's a Draw! Computer chose ${computerChoice}`;
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        result = `You Win! Computer chose ${computerChoice}`;
    }
    else {
        computerScore++;
        result = `You Lose! Computer chose ${computerChoice}`;
    }

    document.getElementById("result").textContent = result;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

document.getElementById("rock")
    .addEventListener("click", function () {
        playGame("rock");
    });

document.getElementById("paper")
    .addEventListener("click", function () {
        playGame("paper");
    });

document.getElementById("scissors")
    .addEventListener("click", function () {
        playGame("scissors");
    });