// ********** LOCAL VARIABLE **********

var currentGame;

// ********** GAMESPACES **********

var gameboard = document.querySelector('.gameboard');
var turnDeclaration = document.querySelector('.turn-token')

// ********** EVENT LISTENERS **********

gameboard.addEventListener('click', takeTurn)
window.addEventListener('load', startNewGame)

// ******** FUNCTIONS/EVENTHANDLERS **********

function takeTurn(event) {
  if(determineAvailability(event)) {
    var targetId = determineBoardLocation(event);
    updateGameBoard(targetId)

  //
  // if location is available, change data model
  // update dom
  // determine if game is over
  // if true, update dom, then:
  // timeout - startNewGame


  console.log(currentGame);
  // if(!currentGame.winner === undefined) {
  //   currentGame.resetBoard()
      // timeout??

  }
}

function startNewGame() {
  var player1 = new Player("player1", "assets/Goldblum.gif", "X")
  var player2 = new Player("player2", "assets/trex.gif", "O")
  currentGame = new Game(player1, player2)
}

function determineBoardLocation(event) {
  var targetId = parseInt(event.target.id)
  return targetId
}

function determineAvailability(event) {
  if(event.target.className === "gameboard") {
    alert('Clever Girl! \n Please pick a valid spot')
  } else if(event.target.className === "player-gamepiece") {
    alert('Life finds a way \n but you will have to find another way \n because that spot is taken')
  } else {
    return true
  }
}

function updateGameBoard(targetId) {
  currentGame.determineBoardStatus(targetId)
  currentGame.changePlayers()
  displayCurrentGameBoard()
  if(currentGame.winner !== undefined) {
      determineGameResult()

  }
}

function displayCurrentGameBoard() {
  gameboard.innerHTML = ""
  for(var i = 0; i < currentGame.currentBoard.length; i++) {
    gameboard.innerHTML +=
    `<div id="${i}">
    </div>`
    var gridLocation = document.getElementById(`${i}`)
    if(currentGame.currentBoard[i] === currentGame.player1.marker) {
      gridLocation.innerHTML += `<img class="player-gamepiece" src="${currentGame.player1.token}" alt="">`
    } else if(currentGame.currentBoard[i] === currentGame.player2.marker) {
      gridLocation.innerHTML += `<img class="player-gamepiece" src="${currentGame.player2.token}" alt="">`
    }
  }
  turnDeclaration.src = `${currentGame.turn.token}`
}

// function updateTurnVisuals(targetId) {
//   var gridLocation = document.getElementById(`${targetId}`)
//   gridLocation.innerHTML = ""
//   gridLocation.innerHTML += `<img class="player-gamepiece" src="${currentGame.turn.token}" alt="">`
//   if(currentGame.winner === undefined) {
    // currentGame.changePlayers()
    // turnDeclaration.src = `${currentGame.turn.token}`
//   }
// }

function determineGameResult() {
  if(currentGame.winner === "tie") {
    displayTieResult()
  } else {
    displayWinResult()
  }
}

function displayTieResult() {
  document.querySelector('.turn-determination').style.display = "none"
  gameboard.innerHTML = ""
  gameboard.innerHTML +=

  `<footer class="game-result">
    <img class="winner-token" src="assets/Tie.jpeg" alt="angry t-rex standing over destroyed Jurassic Park car">
    <h1>It's A Tie!</h1>
  </footer>`
}

function displayWinResult() {
  var scoreboard = document.querySelector(`.${currentGame.winner.id}-score`)
  var winnerDeclaration = document.querySelector('.winner-token')
  document.querySelector('.turn-determination').style.display = "none"
  scoreboard.innerHTML = `${currentGame.turn.wins.length} WINS`
  gameboard.innerHTML = ""
  gameboard.innerHTML +=

  `<footer class="game-result">
  <img class="winner-token" src="${currentGame.turn.token}" alt="${currentGame.turn.token}">
  <h1>WON!</h1>
  </footer>`
}
