let userChoice;
let computerChoice;
let wins = 0;
let ties = 0;
let losses = 0;
let rounds = 0;

function play(user) {
    userChoice = user;
    computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    displayResult(result);
    updateScore(result);
    rounds++;

    if (rounds === 10) {
        alert(`Game Over!\nWins: ${wins}\nTies: ${ties}\nLosses: ${losses}`);
        resetGame();
    }
}

function getComputerChoice() {
    const choices = ['R', 'P', 'S'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(user, computer) {
    if (user === computer) {
        return 'Tie';
    } else if ((user === 'R' && computer === 'S') || (user === 'P' && computer === 'R') || (user === 'S' && computer === 'P')) {
        return 'Win';
    } else {
        return 'Loss';
    }
}

function displayResult(result) {
    const resultMessage = document.getElementById('result');
    resultMessage.textContent = `Result: ${result}`;
}

function updateScore(result) {
    const winsElement = document.getElementById('wins');
    const tiesElement = document.getElementById('ties');
    const lossesElement = document.getElementById('losses');

    if (result === 'Win') {
        wins++;
    } else if (result === 'Tie') {
        ties++;
    } else {
        losses++;
    }

    winsElement.textContent = wins;
    tiesElement.textContent = ties;
    lossesElement.textContent = losses;
}

function resetGame() {
    rounds = 0;
    wins = 0;
    ties = 0;
    losses = 0;

    document.getElementById('result').textContent = '';
    document.getElementById('wins').textContent = '0';
    document.getElementById('ties').textContent = '0';
    document.getElementById('losses').textContent = '0';
}
