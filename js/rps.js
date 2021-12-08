function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 0:
            if (computerSelection === 'rock') {
                return 'Draw!';
            } else if (computerSelection === 'paper') {
                return 'You lose!';
            } else if (computerSelection === 'scissors') {
                return 'You win!';
            }
            break
        case 1:
            if (computerSelection === 'rock') {
                return 'You win!';
            } else if (computerSelection === 'paper') {
                return 'Draw!';
            } else if (computerSelection === 'scissors') {
                return 'You lose!';
            }
            break
        case 2:
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
    let num = Math.floor(Math.random() * 3);
    return options[num];
}
function game() {
    while (count < 5) {
        console.log(`Round ${count}`);
        playerSelection = prompt('1 - Rock, 2 - Paper, 3 - Scissors:');

        if (playerSelection === 'n') {
            console.log('Bye!');
            break;
        };

        playerSelection = parseInt(playerSelection - 1);

        if (playerSelection < 0 || playerSelection > 2) {
            console.log('Choose a number in the range of 1-3!');
            continue;
        };

        let computerSelection = computerPlay();
        console.log(`${options[playerSelection]} vs ${computerSelection}!`);
        console.log(playRound(playerSelection, computerSelection));
        count++;
    };
};
let count = 1;
let playerSelection = '';
const options = ['rock', 'paper', 'scissors'];



game();
