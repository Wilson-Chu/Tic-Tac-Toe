/*
// Creating gameBoard module to setup the grid
const gameBoard = (function () {
    let gridArray = [];


    return {
        gridArray,
    };
})();

// Factory function for player objects
const playerFactory = function (name, state) {
    return { name, state };
};

function identifyWinner(array) {
    if ((array[0] === array[1] && array[0] === array[2]) || (array[3] === array[4] && array[3] === array[5]) || (array[6] === array[7] && array[6] === array[8]) || (array[0] === array[4] && array[0] === array[8]) || (array[2] === array[4] && array[2] === array[6]))
        return ''; // return winning player's name here...
}

const player1 = playerFactory('Player 1', 'X');
const player2 = playerFactory('Computer', 'O');
console.log(player1.name); // 'Player 1'
console.log(player2.state); // 'O'
*/

const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
const cellElements = document.querySelectorAll('[data-cell]');
const gameboard = document.getElementById('gameboard');
const winnerMessageElement = document.getElementById('winnerMessage');
const winnerMessageContentElement = document.querySelector('[data-winner-message-content]');
let circleTurn; // Boolean, is it circle's turn?

startGame();

function startGame() {
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true })
    });
    setBoardHoverClass();
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

    placeMarker(cell, currentClass);
    // Check for Win
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurn();
        setBoardHoverClass();
    }
}

function placeMarker(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapPlayers() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    gameboard.classList.remove(X_CLASS);
    gameboard.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
        gameboard.classList.add(CIRCLE_CLASS);
    }
    else {
        gameboard.classList.add(X_CLASS);
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combo => {
        return combo.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}

function endGame(draw) {
    if (draw) {

    }
    else {
        winnerMessageContentElement.innerText = `${circleTurn ? 'Player 2' : 'Player 1'} Wins!`;
    }
    winnerMessageElement.classList.add('show');
}