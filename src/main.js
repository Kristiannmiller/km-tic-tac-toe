// ********** LOCAL VARIABLE **********

var currentGame;

// ********** GAMESPACES **********

var gameboard = document.querySelector('.gameboard');

// ********** EVENT LISTENERS **********

gameboard.addEventListener('click', takeTurn)
window.addEventListener('load', startNewGame)

// ******** FUNCTIONS/EVENTHANDLERS **********

function takeTurn(event) {
  determineBoardLocation(event);
  // determine if the spot is available
  // determine player turn
  // updateGameBoard()
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
  var targetId = parseInt(event.target.id);
  if(targetId === "") {
    alert('Clever Girl! \n Please pick a valid spot')
  } else if(currentGame.currentBoard[targetId] === "X" || currentGame.currentBoard[targetId] === "O") {
    alert('Life finds a way \n but you will have to find another way \n because that spot is taken')
  } else {
    updateGameBoard(targetId)
  }
}

function fillGameboardTarget(boardLocation) {
  
}

function updateGameBoard(targetId) {
  currentGame.determineBoardStatus(targetId)
  fillGameboardTarget(targetId)
  if(currentGame.winner === undefined) {
    currentGame.turn === currentGame.player1 ? currentGame.turn = currentGame.player2 : currentGame.turn = currentGame.player1;
  }
  if (currentGame.turn === currentGame.player1) {
    currentGame.turn = currentGame.player2
  } else {
    currentGame.turn = currentGame.player1
  }

}
