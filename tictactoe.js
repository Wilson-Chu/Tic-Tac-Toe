const X_CLASS = 'x';
const O_CLASS = 'o';
const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
const cellElements = document.querySelectorAll('[data-cell]');
const gameboard = document.getElementById('gameboard');
const winnerMessageElement = document.getElementById('winnerMessage');
const winnerMessageContentElement = document.querySelector('[data-winner-message-content]');
const restartButton = document.getElementById('restartButton');
let oTurn; // Boolean, is it O's turn?
let player1 = 'Player 1';
let player2 = 'Player 2';

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    //player1=window.prompt('Enter your name: ');

    oTurn = false; // Always starts game with X
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(O_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true })
    });
    setBoardHoverClass();
    winnerMessageElement.classList.remove('show');
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = oTurn ? O_CLASS : X_CLASS;

    placeMarker(cell, currentClass);

    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapPlayers();
        setBoardHoverClass();
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combo => {
        return combo.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
    });
}

function endGame(draw) {
    if (draw) {
        winnerMessageContentElement.innerText = 'Draw!';
    }
    else {
        winnerMessageContentElement.innerText = `${oTurn ? player2 : player1} Wins!`;
    }
    winnerMessageElement.classList.add('show');
}

function placeMarker(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapPlayers() {
    oTurn = !oTurn;
}

function setBoardHoverClass() {
    gameboard.classList.remove(X_CLASS);
    gameboard.classList.remove(O_CLASS);
    if (oTurn) {
        gameboard.classList.add(O_CLASS);
    }
    else {
        gameboard.classList.add(X_CLASS);
    }
}
