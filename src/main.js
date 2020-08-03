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
  // determine target gridLocation
  var targetId = determineBoardLocation(event);
  // determine whether the location is a viable option
  if(determineAvailability(targetId)) {
    updateGameBoard(targetId)

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


function updateTurnVisuals(targetId) {
  var gridLocation = document.getElementById(`${targetId}`)
  gridLocation.innerHTML += `<img class="player-gamepiece" src="${currentGame.turn.token}" alt="">`
  if(currentGame.winner === undefined) {
    currentGame.changePlayers()
    turnDeclaration.src = `${currentGame.turn.token}`
  }
}

function updateResultVisuals() {
  console.log(`.${currentGame.winner.id}-score`);
  var scoreboard = document.querySelector(`.${currentGame.winner.id}-score`)
  var winnerDeclaration = document.querySelector('.winner-token')
  if(currentGame.winner === "tie") {
    gameboard.innerHTML = ""
    gameboard.innerHTML +=

    `<footer class="game-result">
      <img class="winner-token" src="assets/Tie.jpeg" alt="angry t-rex standing over destroyed Jurassic Park car">
      <h1>It's A Tie!</h1>
    </footer>`

  } else {
    scoreboard.innerHTML = `${currentGame.turn.wins.length} WINS`
    gameboard.innerHTML = ""
    gameboard.innerHTML +=

    `<footer class="game-result">
      <img class="winner-token" src="${currentGame.turn.token}" alt="${currentGame.turn.token}">
      <h1>WON!</h1>
    </footer>`

  }
}

function updateGameBoard(targetId) {
  currentGame.determineBoardStatus(targetId)
  if(currentGame.winner === undefined) {
    updateTurnVisuals(targetId)
  } else {
    updateTurnVisuals(targetId)
    updateResultVisuals()
  }
}
