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
    //if this.turn === this.player1
    //loop through currentBoard array
    //if targetId === [i]
    //replace it with "X"
    determineWin()
    determineDraw()

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
