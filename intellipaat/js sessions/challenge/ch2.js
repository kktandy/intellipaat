
var randomChoice = "";

function generateRandomChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    randomChoice = choices[randomIndex];
    const resultElement = document.getElementById('result2');
    resultElement.textContent = randomChoice;
    resultElement.style.display = "block";
}

function showButtonName(button){
    let buttonName = button.id;
    generateRandomChoice();
    var result = compareChoices(buttonName, randomChoice);
    document.getElementById("result").innerHTML = "You Picked : " + buttonName;
    document.getElementById("result1").innerHTML = "Result : " + result;
}


function compareChoices(buttonName, randomChoice){
    if (buttonName === randomChoice){
        return "It's a tie";
    }
    else if (
        (buttonName === "Rock" && randomChoice === "Scissors")||
        (buttonName === "Paper" && randomChoice === "Rock")||
        (buttonName === "Scissors" && randomChoice === "Paper")
    ) {
        return "You win!";
    }
    else{
        return "Computer wins!";
    }
}

