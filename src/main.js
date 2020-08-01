// LOCAL VARIABLE
var newGame;
// GAMESPACES
var gameboard = document.querySelector('.gameboard');

// EVENT LISTENERS
gameboard.addEventListener('click', takeTurn)
window.addEventListener('load', startNewGame)
// FUNCTIONS
function takeTurn(event) {
  determineBoardLocation(event);
  // determine if the spot is available
  // determine player turn
  updateGameBoard()
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
function determineBoardLocation(event) {
  var boardLocation = event.target.id
  console.log(typeof boardLocation)
  if(boardLocation === ""){
    alert('Clever Girl: Please pick a valid spot')
  }
  updateGameBoard(boardLocation)
  fillGameboardTarget(boardLocation)
}
function fillGameboardTarget(boardLocation) {

}
function updateGameBoard(boardLocation) {
  newGame.determineBoardStatus(boardLocation)
  if (newGame.turn === newGame.player1) {
    newGame.turn = newGame.player2
  } else {
    newGame.turn = newGame.player1
  }
}
