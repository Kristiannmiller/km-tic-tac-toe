class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.turn = player1
    this.currentBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    this.winningCombinations = [
      [0, 3, 6], [1, 4, 7],
      [2, 5, 8], [0, 1, 2],
      [3, 4, 5], [6, 7, 8],
      [0, 4, 8], [2, 4, 6]];
  }

  determineBoardStatus(targetId) {
    this.updateCurrentBoard(targetId)
    if (this.mapPlays().length >= 3) {
      console.log(this.mapPlays().length);
      this.determineWin(this.mapPlays())
    }
  }

  updateCurrentBoard(targetId) {
    for(var i = 0; i < this.currentBoard.length; i++) {
      if(this.currentBoard[i] === targetId) {
        this.currentBoard.splice(i, 1, this.turn.marker)
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
    console.log(currentPlayerTurns);
    for(var i = 0; i < this.winningCombinations.length; i++) {
      var matchingSpots = 0
      if(currentPlayerTurns.includes(this.winningCombinations[i][0])) {
        matchingSpots++
      }if(currentPlayerTurns.includes(this.winningCombinations[i][1])) {
        matchingSpots++
      }if(currentPlayerTurns.includes(this.winningCombinations[i][2])) {
        matchingSpots++
      }if(matchingSpots === 3) {
          console.log("WINNER");
          return true
        } else {
          console.log("not a winner");
          return false
      }
      console.log(matchingSpots);
    }
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



                // this.currentBoard =
                // [0, X, X,
                  // 3, X, X,
                  // X, 7, 8]











                  // }
                  // console.log(markerLocations);
                  // if (markerLocations < 3) {
                    //   return false;
                    // } else {
                      //   for(var i = 0; i < winningCombinations.length; i++) {
                        //     if(this.compareArrays(markerLocations, winningCombinations[i])) {
                          //     console.log(`${this.turn} WINS!`);
                          //     return true
                          //   } else {
                            //     console.log(`NO WINNER YET`)
                            //     return false
                            //   }
                            // var combo = markerLocations.toString()
                            // console.log(typeof winningCombinations[i].join(""));
                            // var combo = markerLocations.diff(winningCombinations[i])
                            // if(combo.length === markerLocations - 3) {
                              // if(markerLocations.includes(combo[0] && combo[1] && combo[2])) {
                                // if player1 => var= "X", if player2 => var= "O"
                                // if string instance is less than 3, return out
                                // var player = new array showing only index numbers === var
                                // loop through winning winningCombinations array
                                // if array of index's contains all 3 index's of winningCombinations[i]
                                // saveWinningBoard(player)

























                                // var holdingCell = {}
                                // for (var i = 0; i < markerLocations.length; i++) {
                                  //   if(!holdingCell[markerLocations[i]]) {
                                    //     holdingCell[markerLocations[i]] = 0;
                                    //   }
                                    //   holdingCell[markerLocations[i]]++;
                                    // }
                                    // for(var i = 0; i < winningLocations.length; i++) {
                                      //   if(!holdingCell[winningLocations[i]]) {
                                        //     holdingCell[winningLocations[i]] = 0
                                        //   }
                                        //   if(--holdingCell[winningLocations[i]] < 0) {
                                          //     return false
                                          //   } else {
                                            //     return true
                                            //   }
                                            // }
