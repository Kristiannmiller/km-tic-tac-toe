// LOCAL VARIABLE
var newGame;
// GAMESPACES
var gameboard = document.querySelector('.gameboard');

// EVENT LISTENERS
gameboard.addEventListener('click', takeTurn)
window.addEventListener('load', startNewGame)
// FUNCTIONS
function takeTurn(event) {
  determineTurnLocation(event);
  // determine if the spot is available
  // determine player turn
  // change gameboard/player data model
  // determine game status
  // save to storage
  // update dom

}
function startNewGame() {
  var player1 = new Player("assets/Goldblum.gif")
  var player2 = new Player("assets/trex.gif")
  newGame = new Game(player1, player2)
}
function determineTurnLocation(event) {
  var turn = event.target.id

}
