class Player {
  constructor(id, token, marker, winningImage) {
    this.id = id;
    this.token = token;
    this.currentPlayMap = [];
    this.wins = [];
    this.marker = marker;
    this.winningImage = winningImage;
  };

  saveWinsToStorage() {
    localStorage.setItem(`${this.id}-Wins`, JSON.stringify(this.wins));
  };

  retrieveWinsFromStorage() {
    var storedWins = JSON.parse(localStorage.getItem(`${this.id}-Wins`)) || [];
    this.wins = storedWins;
  };
};
