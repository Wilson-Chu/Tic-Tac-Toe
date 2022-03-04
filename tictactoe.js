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
const cellElements = document.querySelectorAll('[data-cell]');

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
});

function handleClick(e) {
    // Place the appropriate marker

    // Check for Win

    // Check for Draw

    // Switch Players

}