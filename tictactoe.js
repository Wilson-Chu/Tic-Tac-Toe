let gridArray = [];

// Creating gameBoard module to setup the grid
const gameBoard = (function () {
    //enter stuff here...


})();

// Factory function for player objects
const playerFactory = function (name, state) {
    return { name, state };
};

const player1 = playerFactory('Player 1', 'X');
const player2 = playerFactory('Computer', 'O');
console.log(player1.name); // 'Player 1'
console.log(player2.state); // 'O'