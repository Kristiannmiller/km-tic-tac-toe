// GAMESPACES
var gameboard = document.querySelector('.gameboard');

// EVENT LISTENERS
gameboard.addEventListener('click', takeTurn)

// FUNCTIONS
function takeTurn(event) {
  determineTurnLocation(event);
  // determine if the spot is available
  // determine player turn
  // change gameboard/player data model
  // determine game status
  // save to storage
  // update dom

}
function determineTurnLocation(event) {
  var turn = event.target.id
  console.log(event.target.id)
}
