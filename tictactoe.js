let gridArray = [];

function gameBoard(player, state) {
    this.player = player;
    this.state = state;
}

const player1 = new gameBoard('Player 1', 'X');

/* *** Factory function of gameBoard object ***
const gameBoard = function (name, state) {
    return { name, state };
};

const player1 = gameBoard('Player 1', 'X');
console.log(player1.name); // 'Player 1'

*/