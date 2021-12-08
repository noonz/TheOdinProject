function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case '1':
            if (computerSelection === 'rock') {
                return 'Draw!';
            } else if (computerSelection === 'paper') {
                return 'You lose!';
            } else if (computerSelection === 'scissors') {
                return 'You win!';
            }
            break
        case '2':
            if (computerSelection === 'rock') {
                return 'You win!';
            } else if (computerSelection === 'paper') {
                return 'Draw!';
            } else if (computerSelection === 'scissors') {
                return 'You lose!';
            }
            break
        case '3':
            if (computerSelection === 'rock') {
                return 'You lose!';
            } else if (computerSelection === 'paper') {
                return 'You win!';
            } else if (computerSelection === 'scissors') {
                return 'Draw!';
            }
            break
        default:
            break;
    }
}

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * 3);
    return options[num];
}

let playerSelection = '';
while (true) {
    playerSelection = prompt('1 - Rock, 2 - Paper, 3 - Scissors: ', 1);
    if (playerSelection === 'n') break;
    if (playerSelection < 0 || playerSelection > 3) continue;
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
};
console.log('Bye!');
