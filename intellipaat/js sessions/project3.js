let playGame = confirm("Do you want to play rock, paper, scissors");

while (playGame) {
    const choice = prompt("Please enter your choice (rock, paper, scissors)");

    if (choice || choice === "") {
        const player = choice.trim().toLowerCase();

        if (player === "rock" || player === "scissors" || player === "paper") {
            const comp = Math.floor(Math.random() * 3);
            const arr = ["rock", "paper", "scissors"];
            const compArr = arr[comp];

            const result =
                player === compArr
                    ? "Tie game"
                    : (player === "rock" && compArr === "paper") ||
                      (player === "paper" && compArr === "scissors") ||
                      (player === "scissors" && compArr === "rock")
                    ? `Player's choice: ${player}\nComputer's choice: ${compArr}\nComputer wins`
                    : `Player's choice: ${player}\nComputer's choice: ${compArr}\nPlayer wins`;

            alert(result);

            playGame = confirm("Play again?");

            if (!playGame) {
                alert("Okay, thanks for playing");
            }
        }
    } else {
        alert("I guess you changed your mind. Stop by again?");
        break;
    }
}

if (!playGame) {
    alert("Okay, maybe next time");
}
