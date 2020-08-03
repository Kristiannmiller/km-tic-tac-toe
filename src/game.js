class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.turn = player1
    this.turnCount = 0
    this.winner = undefined
    this.currentBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    this.winningCombinations = [
      [0, 3, 6], [1, 4, 7],
      [2, 5, 8], [0, 1, 2],
      [3, 4, 5], [6, 7, 8],
      [0, 4, 8], [2, 4, 6]];
  }

  determineBoardStatus(targetId) {
    this.updateCurrentBoard(targetId)
    if(this.mapPlays().length >= 3) {
      this.determineWin(this.mapPlays())
    }
  }

  updateCurrentBoard(targetId) {
    for(var i = 0; i < this.currentBoard.length; i++) {
      if(this.currentBoard[i] === targetId) {
        this.currentBoard.splice(i, 1, this.turn.marker)
        this.turnCount++
      }
    }
  }

  mapPlays() {
    var currentPlayerTurns = [];
    for(var i = 0; i < this.currentBoard.length; i++) {
      if(this.currentBoard[i] === this.turn.marker) {
        currentPlayerTurns.push(i)
      }
    }
    return currentPlayerTurns
  }


  determineWin(currentPlayerTurns) {
    for(var i = 0; i < this.winningCombinations.length; i++) {
      if ((currentPlayerTurns.includes(this.winningCombinations[i][0])) &&
      (currentPlayerTurns.includes(this.winningCombinations[i][1])) &&
      (currentPlayerTurns.includes(this.winningCombinations[i][2]))) {
        this.winner = this.turn
        // this.turn.wins.push(this)
        // this.resetBoard()
        break
      } else {
        this.determineTie()
      }
    }
  }

  determineTie() {
    this.turnCount === 9 ? this.winner = "tie" : this.winner = undefined
  }

  changePlayers() {
    if(this.winner === undefined) {
      this.turn === this.player1 ?
      this.turn = this.player2 :
      this.turn = this.player1;
    }
  }

  saveWinningBoard(player) {
    // Rewrite winning board so that numbers are empty strings
    // send to player.wins

  }
  resetBoard() {
    this.currentBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    this.turn = this.player1
  }
}
