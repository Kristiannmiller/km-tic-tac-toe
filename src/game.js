class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.currentBoard =
    ["r1c1", "r1c2", "r1c3",
    "r2c1", "r2c2", "r2c3",
    "r3c1", "r3c2", "r3c3"]
    this.turn = this.player1
  }
  determineBoardStatus(targetId) {
    if(this.turn === this.player1) {
      for(var i = 0; i < this.currentBoard.length; i++) {
        if(this.currentBoard[i] === targetId) {
          this.currentBoard.splice(i, 1, "X");
          this.turn = this.player2
        }
      }
    } else {
      for(var i = 0; i < this.currentBoard.length; i++) {
        if(this.currentBoard[i] === targetId) {
          this.currentBoard.splice(i, 1, "O");
          this.turn = this.player1
        }
      }
    }
    // determineWin()
    // determineDraw()

  }
  determineWin() {

  }
  determineDraw() {

  }
  saveWinningBoard() {

  }
  resetBoard() {

  }
}
