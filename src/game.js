class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.currentBoard =
    [0, 1, 2,
    3, 4, 5,
    6, 7, 8]
    this.turn = player1
  }
  determineBoardStatus(targetId) {
    if(this.currentBoard[targetId] === "X" || this.currentBoard[targetId] === "O") {
      alert('Life finds a way \n but you will have to find another way \n because that spot is taken')
      return
    }
    var marker = this.turn === this.player1 ? "X" : "O"
    for(var i = 0; i < this.currentBoard.length; i++) {
      if(this.currentBoard[i] === targetId) {
        this.currentBoard.splice(i, 1, marker)
      }
    }
    this.determineWin()
    this.determineTie()
    // if(this.turn === this.player1) {
    //     for(var i = 0; i < this.currentBoard.length; i++) {
    //         if(this.currentBoard[i] === targetId) {
    //             this.currentBoard.splice(i, 1, "X");
    //             this.turn = this.player2
    //           }
    //         }
    //       } else {
    //           for(var i = 0; i < this.currentBoard.length; i++) {
    //               if(this.currentBoard[i] === targetId) {
    //                   this.currentBoard.splice(i, 1, "O");
    //                   this.turn = this.player1
    //                 }
    //               }
    //             }
    //
    // for(var i = 0; i < this.currentGame; i++) {
      //   if(this.currentBoard[i] === targetId) {
        //     this.currentBoard.splice(i, 1, `${player1.marker}`)
        //   }
        // }

  }
  determineWin(player) {
    var marker = this.turn === this.player1 ? "X" : "O"
    var markerLocations = [];
    var winningCombinations = [
      [0, 3, 6], [1, 4, 7],
      [2, 5, 8], [0, 1, 2],
      [3, 4, 5], [6, 7, 8],
      [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i < this.currentBoard.length; i++) {
      if (this.currentBoard[i] === marker) {
        markerLocations.push(i)
      }
    }
    for(var i = 0; i < winningCombinations.length; i++) {
      console.log(markerLocations);
      var 
      if(markerLocations.includes(winningCombinations[i])){
        console.log("WINNER");
      }
    }
    // if player1 => var= "X", if player2 => var= "O"
    // if string instance is less than 3, return out
    // var player = new array showing only index numbers === var
    // loop through winning winningCombinations array
    // if array of index's contains all 3 index's of winningCombinations[i]
    // saveWinningBoard(player)
  }


  determineTie() {
    //if board is full, and determineWin=false
    //it's a draw


  }
  saveWinningBoard(player) {
    // Rewrite winning board so that numbers are empty strings
    // send to player.wins

  }
  resetBoard() {
    // clear currentBoard
    // timeout?
  }
}
