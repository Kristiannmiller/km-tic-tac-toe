// LOCAL VARIABLE
var currentGame;
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
  console.log(currentGame);
  // change gameboard/player data model
  // determine game status
  // save to storage
  // update dom

}
function startNewGame() {
  var id1 = Math.floor(Math.random() * 10000)
  var id2 = Math.floor(Math.random() * 10000)
  var player1 = new Player(id1, "assets/Goldblum.gif", "X")
  var player2 = new Player(id2, "assets/trex.gif", "O")
  currentGame = new Game(player1, player2)
  console.log(currentGame);
}
function determineBoardLocation(event) {
  var boardLocation = parseInt(event.target.id);
  if(boardLocation === ""){
    alert('Clever Girl! \n Please pick a valid spot')
  }
  updateGameBoard(boardLocation)
  fillGameboardTarget(boardLocation)
}
function fillGameboardTarget(boardLocation) {

}
function updateGameBoard(boardLocation) {
  currentGame.determineBoardStatus(boardLocation)
  if (currentGame.turn === currentGame.player1) {
    currentGame.turn = currentGame.player2
  } else {
    currentGame.turn = currentGame.player1
  }
}
