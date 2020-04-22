
let aiChoice; // create a variable containing the computer's choice by generating a random number between 1-3 and assigning 1-3 to a choice.
let playerChoice; // variable containing player's choice
const playChoices = ["rock", "paper", "scissors"]; // variable containg possible play choices
let wins = 0;
let losses = 0;
let winner;

// function to get the index of the cumputer's choice
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// function to compare user input to the computer to determine the winner
function compareChoices(pChoice, aChoice) {

    if (pChoice == aChoice) {
        return "Tie!";
    }
    if (pChoice == 2 && aChoice == 0) {
        losses++;
        return "Computer wins that round!";
    }
    if (aChoice == 2 && pChoice == 0) {
        wins++;
        return "Player wins that round!";
    }
    if (pChoice > aChoice) {
        wins++;
        return "Player wins that round!"
    }
    if (aChoice > pChoice) {
        losses++;
        return "Computer wins that round!"
    }

}

// create a reset function that restarts the game parameters
function gameRestart() {
    wins = 0;
    losses = 0;
    document.getElementById("wins").textContent = "Wins: " + wins;
    document.getElementById("losses").textContent = "Losses: " + losses;
    document.getElementById("gameUpdate").textContent = "Result: ";
}


// create node list for all buttons in DOM
const gameButtons = document.querySelectorAll('.GameButton');

// iterate through each button to see if it has been clicked
gameButtons.forEach((button) => {

    // add an event listener for each button
    button.addEventListener('click', (e) => {
        playerChoice = button.value;
        aiChoice = getRandomInt(3);
        document.getElementById("gameUpdate").textContent = "Result: " + compareChoices(playerChoice, aiChoice) + " You chose " + playChoices[playerChoice] + " and the Computer chose " + playChoices[aiChoice];
        document.getElementById("wins").textContent = "Wins: " + wins;
        document.getElementById("losses").textContent = "Losses: " + losses;
        let numRounds = document.getElementById("numRounds").value;
        if (wins == numRounds) {
            setTimeout(function() {window.alert("You win!");
            gameRestart();
        }, 30);
        }
        if (losses == numRounds) {
            setTimeout(function() {window.alert("Computer wins :( Better luck next time.");
            gameRestart();
        }, 30);
        }

    });
});

document.getElementById("reset").addEventListener('click', (e) => {
    gameRestart();
});

