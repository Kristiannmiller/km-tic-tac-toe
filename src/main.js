// ********** LOCAL VARIABLE **********

var currentGame;

// ********** GAMESPACES **********

var gameboard = document.querySelector('.gameboard');

// ********** EVENT LISTENERS **********

gameboard.addEventListener('click', takeTurn)
window.addEventListener('load', startNewGame)

// ******** FUNCTIONS/EVENTHANDLERS **********

function takeTurn(event) {
  // determine target gridLocation
  var targetId = determineBoardLocation(event);
  // determine whether the location is a viable option
  determineAvailability(targetId) ? fillGameboardTarget(targetId) : false

  //
  // if location is available, change data model
  // update dom
  // determine if game is over
  // if true, update dom, then:
  // timeout - startNewGame


  console.log(currentGame);
  if(!currentGame.winner === undefined) {
    currentGame.resetBoard()
      // timeout??
  }
}

function startNewGame() {
  var player1 = new Player("player1", "assets/Goldblum.gif", "X")
  var player2 = new Player("player2", "assets/trex.gif", "O")
  currentGame = new Game(player1, player2)
  console.log(currentGame);
}

function determineBoardLocation(event) {

  var targetId = parseInt(event.target.id)
  return targetId
}

    // updateGameBoard(targetId)

function determineAvailability(targetId) {
  if(targetId === "") {
    alert('Clever Girl! \n Please pick a valid spot')
  } else if(currentGame.currentBoard[targetId] === "X" || currentGame.currentBoard[targetId] === "O") {
    alert('Life finds a way \n but you will have to find another way \n because that spot is taken')
  } else {
    return true
  }
}


function updateGameVisuals(targetId) {
  var gridLocation = document.getElementById(`${targetId}`)
  var scoreboard = document.querySelector(`.${currentGame.turn.id}-score`)
  var turnDeclaration = document.querySelector('.turn-determination')
  gridLocation.innerHTML += `<img class="player-gamepiece" src="${currentGame.turn.token}" alt="">`
  if(currentGame.)

}

function updateGameBoard(targetId) {
  currentGame.determineBoardStatus(targetId)
  updateGameVisuals(targetId)
  if(currentGame.winner === undefined) {
    currentGame.turn === currentGame.player1 ? currentGame.turn = currentGame.player2 : currentGame.turn = currentGame.player1;
  }
}
