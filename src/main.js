// ********** LOCAL VARIABLE **********

var currentGame;

// ********** GAMESPACES **********

var gameboard = document.querySelector('.gameboard');
var turnDeclaration = document.querySelector('.turn-determination')
var turnImage = document.querySelector('.turn-token')

// ********** EVENT LISTENERS **********

gameboard.addEventListener('click', determineTargetLocation)
window.addEventListener('load', startNewGame)

// ******** FUNCTIONS/EVENTHANDLERS **********

function determineTargetLocation(event) {
  if(determineAvailability(event)) {
    var targetId = parseInt(event.target.id);
    updateGameBoard(targetId)
  }
}

function startNewGame() {
  var player1 = new Player("player1", "assets/Goldblum.gif", "X")
  var player2 = new Player("player2", "assets/trex.gif", "O")
  currentGame = new Game(player1, player2)
  player1.retrieveWinsFromStorage()
  player2.retrieveWinsFromStorage();
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
      setTimeout(determineGameResult, 1000)
      setTimeout(resetGame, 6000)
  }
}

function displayCurrentGameBoard() {
  turnDeclaration.style.display = "flex"
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
  turnImage.src = `${currentGame.turn.token}`
  displayPlayerScores()
}

function displayPlayerScores() {
  document.querySelector('.player1-score').innerHTML = `${currentGame.player1.wins.length} WINS`
  document.querySelector('.player2-score').innerHTML = `${currentGame.player2.wins.length} WINS`
}

function determineGameResult() {
  if(currentGame.winner === "tie") {
    displayTieResult()
  } else {
    displayWinResult()
  }
}

function displayTieResult() {
  turnDeclaration.style.display = "none"
  gameboard.innerHTML = ""
  gameboard.innerHTML +=

  `<footer class="game-result">
    <img class="winner-token" src="assets/Tie.jpeg" alt="angry t-rex standing over destroyed Jurassic Park car">
    <h1>It's A Tie!</h1>
  </footer>`
}

function displayWinResult() {
  // var scoreboard = document.querySelector(`.${currentGame.winner.id}-score`)
  var winnerDeclaration = document.querySelector('.winner-token')
  turnDeclaration.style.display = "none"
  // scoreboard.innerHTML = `${currentGame.turn.wins.length} WINS`
  gameboard.innerHTML = ""
  gameboard.innerHTML +=

  `<footer class="game-result">
    <img class="winner-token" src="${currentGame.turn.token}" alt="${currentGame.turn.token}">
    <h1>WON!</h1>
  </footer>`
}

function resetGame() {
  currentGame.resetBoard()
  displayCurrentGameBoard()
}
