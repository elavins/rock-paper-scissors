/**
 *  
 */

let results = [];

for (let i = 0; i < 5; i++) {;
    results.push(playGame());
}

printResults();

function playGame() {
    let move = playerMove();
    while (move < 0) {
        alert("That wasn't rock, paper or scissors! Try again.");
        move = playerMove();
    }
    let cpu = cpuMove();

    if (move == cpu) {
        alert("Tie!");
        return "tie";
    } else if (move - 1 == cpu || move + 2 == cpu) {
        alert("You win!");
        return "player";
    } else {
        alert("Computer wins!");
        return "cpu";
    }
}

function cpuMove() {
    return Math.round(Math.random() * 2 + 1);
}

function playerMove() {
    let input = prompt("Rock, paper, or scissors?");
    if (input.toLowerCase() == "rock") { return 1 }
    else if (input.toLowerCase() == "paper") { return 2 }
    else if (input.toLowerCase() == "scissors") { return 3 }
    return -1;
}

function printResults() {
    console.log("******** Final results! **********");
    for (let i = 0; i < results.length; i++) { 
        console.log(`Game${i+1}: ${results[i]}`);
    }
    console.log("*********************************");
}